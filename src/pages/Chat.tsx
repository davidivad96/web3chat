import { Box, Center, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Navbar from '../components/Navbar';
import AccountsModal from '../components/AccountsModal';

const Chat: React.FunctionComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#dedede" h="full" borderRadius={3}>
      <Navbar page="chat" />
      <Center>
        <Text>{"It seems you haven't started any conversation yet"}</Text>
        <IconButton aria-label="Add Chat" icon={<AddIcon />} onClick={onOpen} />
      </Center>
      <AccountsModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Chat;
