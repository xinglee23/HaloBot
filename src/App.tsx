import React from 'react';
import SideBar from './components/SideBar';
import ToolbarDemo from './components/ToolBar';
import Content from './Content';

import {styled} from '@stitches/react';

const DialogDemo = () => (
  <>
    {/* <ToolbarDemo /> */}
    <DialogWrapper>
      <SideBar />
      <Content />
    </DialogWrapper>
  </>
);

const DialogWrapper = styled('div', {
  display: 'flex',
});

export default DialogDemo;
