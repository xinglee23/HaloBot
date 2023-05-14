import LabelInput from '../components/LabelInput';
import dialog from '../data/temp';
import Card from '../components/Card';
import {styled} from '@stitches/react';

interface IMessage {
  id: string;
  title: string;
  messages: {
    answer: string;
    createdAt: number;
    question: string;
  }[];
}

const DialogContent = () => {
  console.log('dialogdialog', dialog);

  const {id, title, messages} = dialog as IMessage;
  return (
    <DialogWrapper>
      <div>
        {messages.map((v) => (
          <div key={v.createdAt}>
            <Card text={v.question} />
            <Card text={v.answer} />
          </div>
        ))}
      </div>
      <LabelInput />
    </DialogWrapper>
  );
};

const DialogWrapper = styled('div', {
  padding: '0 20px',
  width: '100%',
  height: '80vh',
  overflow: 'auto',
});

export default DialogContent;
