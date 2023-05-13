import React from 'react';
import SideBar from './components/SideBar';
import ToolbarDemo from './components/ToolBar';

import {styled} from '@stitches/react';

const DialogDemo = () => (
  <>
    <ToolbarDemo />
    <DialogWrapper>
      <SideBar />
      content
    </DialogWrapper>
  </>
);

const DialogWrapper = styled('div', {
  display: 'flex',
});

export default DialogDemo;
