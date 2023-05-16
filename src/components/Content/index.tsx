import React, { useEffect } from 'react';
import LabelInput from '../LabelInput';
import dialog from '../../data/temp';
import Card from '../Card';
import { styled } from '@stitches/react';
// import {useOperationKey} from '../../hooks';
import { DECODER } from '../../libs/utils';
import { chat } from '../../libs/gpt';
import { ChatMessage } from '../../types';

interface IMessage {
  id: string;
  title: string;
  messages: {
    answer: string;
    createdAt: number;
    question: string;
  }[];
}

const GPT_V = 'gpt-3.5-turbo';

const DialogContent = () => {
  console.log('dialogdialog', dialog);

  // const {id, title, messages: msgTxt} = dialog as IMessage;
  const { messages: msgTxt } = dialog as IMessage;

  // const {getKey, setKey} = useOperationKey();
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      role: 'system',
      content:
        '你是 ChatGPT，OpenAI 训练的大型语言模型，尽可能Authentic, concise,accurate的回答问题。',
    },
    {
      role: 'assistant',
      content: `
      你好，我是神奇海螺，欢迎提问
      `,
    },
  ]);

  const appendLastMessageContent = (content: string) => {
    const newMsg = [...messages];
    newMsg[newMsg.length - 1].content += content;
    setMessages(newMsg);
  };

  // 读取Stream
  const readStream = async (
    reader: ReadableStreamDefaultReader<Uint8Array>
  ) => {
    const { done, value } = await reader.read();
    if (done) {
      reader.closed;
      return;
    }
    const dataList = DECODER.decode(value).match(/(?<=data: )\s*({.*?}]})/g);
    dataList?.forEach((v: any) => {
      const json = JSON.parse(v);
      appendLastMessageContent(json.choices[0].delta.content ?? '');
    });
    await readStream(reader);
  };

  // 发送消息
  const sendChatMessage = async (content: string) => {
    // 滚动到底部开关
    if (messages.length === 2) {
      messages.pop();
    }

    messages.push({ role: 'user', content });
    messages.push({ role: 'assistant', content: '' });
    // 调用接口 获取数据
    const { status, data, message } = await chat(messages, 'xxxxxxx', GPT_V);

    if (status === 'success' && data) {
      const reader = data.getReader();
      await readStream(reader);
    } else {
      appendLastMessageContent(message);
    }
  };

  useEffect(() => {
    sendChatMessage('this is a test!');
  }, []);

  const handleClick = () => {};

  return (
    <DialogWrapper>
      <ContextInner>
        {msgTxt.map((v) => (
          <div key={v.createdAt}>
            <Card type='question' text={v.question} />
            <Card type='answer' text={v.answer} />
          </div>
        ))}
      </ContextInner>
      <LabelInput onClick={handleClick} />
    </DialogWrapper>
  );
};

const DialogWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 20px 20px',
  width: '100%',
  height: '80vh',
  overflow: 'auto',
});

const ContextInner = styled('div', {
  width: 800,
  overflow: 'auto',
});

export default DialogContent;
