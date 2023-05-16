import { blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import ReactMarkdown from 'react-markdown';
import Avatar from '../Avatar';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IProps {
  text: string;
  type: 'answer' | 'question';
}

const Card = (props: IProps) => (
  <CardRoot>
    <Avatar type={props.type} />
    <Box
      css={{
        borderRadius: 6,
        overflow: 'hidden',
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
      }}
    >
      <ReactMarkdown
        children={props.text}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, '')}
                style={oneDark}
                language={match[1]}
                PreTag='div'
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </Box>
  </CardRoot>
);

const CardRoot = styled('div', {
  display: 'flex',
});
const Box = styled('div', {
  marginLeft: 10,
  marginBottom: 20,
  padding: 10,
  width: '100%',
  minHeight: 20,
  whiteSpace: 'pre-wrap',
  background: '#fff',
});

export default Card;
