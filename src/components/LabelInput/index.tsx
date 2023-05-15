import {styled} from '@stitches/react';
import {blackA} from '@radix-ui/colors';

const LabelInput = () => {
  const handleChange = (e: any) => {
    console.log('eeeeee', e.target.value);
  };
  return (
    <Flex>
      <Input
        type='text'
        id='firstName'
        onChange={handleChange}
        defaultValue='Pedro Duarte'
      />
    </Flex>
  );
};

const Input = styled('input', {
  all: 'unset',
  width: 672,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  height: 50,
  fontSize: 15,
  lineHeight: 1,
  color: 'white',
  textAlign: 'left',
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  '&:focus': {boxShadow: `0 0 0 2px black`},
  '&::selection': {backgroundColor: blackA.blackA9, color: 'white'},
});

const Flex = styled('div', {
  position: 'fixed',
  padding: '0 10px',
  bottom: 52,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export default LabelInput;
