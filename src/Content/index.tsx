import LabelInput from '../components/LabelInput';

import {styled} from '@stitches/react';

const DialogContent = () => (
  <DialogWrapper>
    <LabelInput />
  </DialogWrapper>
);

const DialogWrapper = styled('div', {
  width: '100%',
  height: '100vh',
  //   display: 'flex',
});

export default DialogContent;
