import React from 'react';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import {styled} from '@stitches/react';
import {blackA, teal} from '@radix-ui/colors';

const Card = (props: {text: string}) => (
  <Box
    css={{
      borderRadius: 6,
      overflow: 'hidden',
      boxShadow: `0 2px 10px ${blackA.blackA7}`,
    }}
  >
    {props.text}
  </Box>
);

const Box = styled('div', {
  marginBottom: 20,
  padding: 10,
  minHeight: 20,
  background: '#fff',
});

export default Card;
