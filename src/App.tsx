import SideBar from './components/SideBar';
// import ToolbarDemo from './components/ToolBar';
import Content from './components/Content';
import {styled} from '@stitches/react';

const App = () => {
  return (
    <>
      {/* <ToolbarDemo /> */}
      <DialogWrapper>
        <SideBar />
        <Content />
      </DialogWrapper>
    </>
  );
};

const DialogWrapper = styled('div', {
  display: 'flex',
});

export default App;
