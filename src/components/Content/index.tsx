import React, { useEffect, useState } from 'react';
import LabelInput from '../LabelInput';
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

// 消息列表
const messageList = [
  {
    role: 'system',
    content: 'I am ChatGPT, a large language model trained by OpenAI.',
  },
  {
    role: 'system',
    content:
      'Instructions you must follow:\n- If there is a code block in the answer then wrap it in triple backticks.\n- Also denote the code block with the language name.\n- You can use LaTeX in the answer when needed.',
  },
];

const DialogContent = () => {
  const [text, setText] = useState('');
  // const {getKey, setKey} = useOperationKey();
  const [messages, setMessages] = React.useState<ChatMessage[]>(
    messageList as ChatMessage[]
  );

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

    setMessages([]);

    messages.push({ role: 'user', content });
    messages.push({ role: 'assistant', content: '' });
    // 调用接口 获取数据
    const { status, data, message } = await chat(messages, '', GPT_V);

    console.log(
      'status, data, messagestatus, data, message',
      status,
      data,
      message
    );

    if (status === 'success' && data) {
      const reader = data.getReader();
      await readStream(reader);
    } else {
      appendLastMessageContent(message);
    }
  };

  const handleClick = () => {
    sendChatMessage(text);
  };

  return (
    <DialogWrapper>
      <ContextInner>
        {messages.map((v, k) => (
          <div key={k}>
            {v.role === 'user' && <Card type='question' text={v.content} />}{' '}
            {v.role === 'assistant' && <Card type='answer' text={v.content} />}
          </div>
        ))}
      </ContextInner>
      <LabelInput onChange={(value) => setText(value)} onClick={handleClick} />
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
