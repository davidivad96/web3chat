import { Box, Container, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Chat: React.FunctionComponent = () => (
  <Container maxW="container.xl" h="full" py="4">
    <Box bg="#ededed" h="full" borderRadius={3}>
      <Navbar />
      <Text>CHAT</Text>
    </Box>
  </Container>
);

export default Chat;
