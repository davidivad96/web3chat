import { Box, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Quiz: React.FunctionComponent = () => (
  <Box bg="#ededed" h="full" borderRadius={3}>
    <Navbar page="quiz" />
    <Text>QUIZ</Text>
  </Box>
);

export default Quiz;
