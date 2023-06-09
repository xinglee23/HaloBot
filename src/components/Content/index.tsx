import React, { useState } from 'react';
import TextArea from '../TextArea';
import Card from '../Card';
import { styled } from '@stitches/react';
import { useOperationKey } from '../../hooks';
import { DECODER } from '../../libs/utils';
import { chat } from '../../libs/gpt';
import { ChatMessage } from '../../types';
import { GPT_V, MESSAGE_LIST } from '../../constant';
import DialogDemo from '../Dialoag';

const DialogContent = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const { getKey } = useOperationKey();
  const [messages, setMessages] = React.useState<ChatMessage[]>(
    MESSAGE_LIST as ChatMessage[]
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
  }

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
    if (!getKey()) {
      return setVisible(true);
    }
    sendChatMessage(text);
  };

  return (
    <DialogWrapper>
      <DialogDemo open={visible} onOpenChange={() =>  setVisible(false)} />
      <ContextInner>
        {messages.map((v, k) => (
          <div key={k}>
            {v.role === 'user' && <Card type='question' text={v.content} />}{' '}
            {v.role === 'assistant' && <Card type='answer' text={v.content} />}
          </div>
        ))}
      </ContextInner>
      <TextArea onChange={(value) => setText(value)} onClick={handleClick} />
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
