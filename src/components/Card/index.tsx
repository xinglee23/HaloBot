import {blackA} from '@radix-ui/colors';
import {styled} from '@stitches/react';
import Avatar from '../Avatar';

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
      {props.text}
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
  minHeight: 20,
  background: '#fff',
});

export default Card;
