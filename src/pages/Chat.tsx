import { Box, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Chat: React.FunctionComponent = () => (
  <Box bg="#dedede" h="full" borderRadius={3}>
    <Navbar page="chat" />
    <Text>CHAT</Text>
  </Box>
);

export default Chat;
