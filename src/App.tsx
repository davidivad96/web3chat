import { ConnectWallet } from '@3rdweb/react';
import { Center, Text, VStack } from '@chakra-ui/react';

const App: React.FunctionComponent = () => (
  <Center bgGradient="linear(to-r, #1A2980, #26D0CE)" h="100vh" color="white">
    <VStack spacing={5}>
      <Text fontSize="6xl">Welcome to Web3Chat!</Text>
      <ConnectWallet size="lg" colorScheme="blackAlpha" />
    </VStack>
  </Center>
);
export default App;
