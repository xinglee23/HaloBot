export const GPT_V = 'gpt-3.5-turbo';

// predefined messages
export const MESSAGE_LIST = [
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
