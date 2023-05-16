import * as Toolbar from '@radix-ui/react-toolbar';
import { violet, blackA, mauve } from '@radix-ui/colors';

import { styled } from '@stitches/react';

const ToolbarWrapper = () => (
  <ToolbarRoot aria-label='Formatting options'>
    <ToolbarTitle css={{ marginRight: 10 }}>HaloBot</ToolbarTitle>
    <ToolbarButton css={{ marginLeft: 'auto' }}>Share</ToolbarButton>
  </ToolbarRoot>
);

const ToolbarRoot = styled(Toolbar.Root, {
  display: 'flex',
  padding: 10,
  width: '100%',
  minWidth: 'max-content',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
  all: 'unset',
  flex: '0 0 auto',
  color: mauve.mauve11,
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: violet.violet3, color: violet.violet11 },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${violet.violet7}` },
};

const ToolbarTitle = styled(
  Toolbar.Link,
  {
    ...itemStyles,
    backgroundColor: 'transparent',
    color: mauve.mauve12,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 800,
  },
  { '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' } }
);

const ToolbarButton = styled(
  Toolbar.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    backgroundColor: violet.violet9,
  },
  { '&:hover': { backgroundColor: violet.violet10, color: 'white' } }
);

export default ToolbarWrapper;
