import { ChangeEvent } from 'react';
import { styled } from '@stitches/react';
import { blackA } from '@radix-ui/colors';
import sendSvg from '../../assets/send.svg';

interface IProps {
  onChange: (value: string) => void;
  onClick: () => void;
}

const TextArea: React.FC<IProps> = ({ onChange, onClick }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };
  return (
    <Flex>
      <Input
        type='text'
        id='firstName'
        onChange={handleChange}
        placeholder='Ask anything'
      />
      <Icon onClick={onClick} />
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
  marginRight: 10,
  padding: '0 10px',
  height: 50,
  fontSize: 15,
  lineHeight: 1,
  color: 'white',
  textAlign: 'left',
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA9}`,
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&::selection': { backgroundColor: blackA.blackA9, color: 'white' },
});

const Icon = styled('span', {
  display: 'inline-block',
  marginLeft: -50,
  width: 24,
  height: 50,
  backgroundPosition: 'center',
  backgroundImage: `url(${sendSvg})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  cursor: 'pointer',
  '&:focus': { boxShadow: `0 0 0 2px black` },
})

const Flex = styled('div', {
  position: 'fixed',
  padding: '0 10px',
  bottom: 52,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export default TextArea;
