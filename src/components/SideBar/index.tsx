import * as Dialog from '@radix-ui/react-dialog';
import {Cross2Icon, PlusIcon} from '@radix-ui/react-icons';
import {violet, blackA, mauve, green} from '@radix-ui/colors';
import {styled, keyframes} from '@stitches/react';

const SideBar = () => (
  <SideBarRoot>
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>
          <PlusIcon />
          New chat
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
          <Fieldset>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' defaultValue='Pedro Duarte' />
          </Fieldset>
          <Fieldset>
            <Label htmlFor='username'>Username</Label>
            <Input id='username' defaultValue='@peduarte' />
          </Fieldset>
          <Flex css={{marginTop: 25, justifyContent: 'flex-end'}}>
            <Dialog.Close asChild>
              <Button variant='green'>Save changes</Button>
            </Dialog.Close>
          </Flex>
          <Dialog.Close asChild>
            <IconButton aria-label='Close'>
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  </SideBarRoot>
);

const SideBarRoot = styled('div', {
  display: 'flex',
  padding: 10,
  width: 255,
  height: '100vh',
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const overlayShow = keyframes({
  '0%': {opacity: 0},
  '100%': {opacity: 1},
});

const contentShow = keyframes({
  '0%': {opacity: 0, transform: 'translate(-50%, -48%) scale(.96)'},
  '100%': {opacity: 1, transform: 'translate(-50%, -50%) scale(1)'},
});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': {outline: 'none'},
});

const DialogTitle = styled(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: mauve.mauve12,
  fontSize: 17,
});

const DialogDescription = styled(Dialog.Description, {
  margin: '10px 0 20px',
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

const Flex = styled('div', {display: 'flex'});

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,

  variants: {
    variant: {
      violet: {
        height: 46,
        width: '100%',
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': {backgroundColor: mauve.mauve3},
        '&:focus': {boxShadow: `0 0 0 2px ${violet.violet7}`},
      },
      green: {
        height: 35,
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': {backgroundColor: green.green5},
        '&:focus': {boxShadow: `0 0 0 2px ${green.green7}`},
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 10,
  right: 10,

  '&:hover': {backgroundColor: violet.violet4},
  '&:focus': {boxShadow: `0 0 0 2px ${violet.violet7}`},
});

const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  marginBottom: 15,
});

const Label = styled('label', {
  fontSize: 15,
  color: violet.violet11,
  width: 90,
  textAlign: 'right',
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  flex: '1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,

  '&:focus': {boxShadow: `0 0 0 2px ${violet.violet8}`},
});

export default SideBar;
