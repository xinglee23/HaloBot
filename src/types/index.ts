export * from './gpt';

export interface IMessage {
  id: string;
  title: string;
  messages: {
    answer: string;
    createdAt: number;
    question: string;
  }[];
}
