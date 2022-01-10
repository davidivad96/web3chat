import { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { AccountContext } from '../contexts/Account';

const Chat: React.FunctionComponent = () => {
  const { account } = useContext(AccountContext);

  return (
    <Box bg="#dedede" h="full" borderRadius={3}>
      <Navbar page="chat" />
      <Text>CHAT</Text>
      <Text>{account.address}</Text>
      <Text>{account.avatarUrl}</Text>
    </Box>
  );
};

export default Chat;
