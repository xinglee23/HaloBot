import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '@stitches/react';
import { violet, blackA } from '@radix-ui/colors';
import chatGPTImage from '../../assets/chat-gpt.webp';

const Avatar = (props: { type: 'question' | 'answer' }) => (
  <Flex css={{ gap: 20 }}>
    <AvatarRoot>
      {props.type === 'question' && (
        <AvatarFallback delayMs={600}>ME</AvatarFallback>
      )}
      {props.type === 'answer' && (
        <AvatarImage src={chatGPTImage} alt='Colm Tuite' />
      )}
    </AvatarRoot>
  </Flex>
);

const AvatarRoot = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: violet.violet11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

const Flex = styled('div', { display: 'flex' });

export default Avatar;
