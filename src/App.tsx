import { ConnectWallet } from '@3rdweb/react';
import { Center } from '@chakra-ui/react';

const App = () => (
  <Center bgGradient="linear(to-r, #1A2980, #26D0CE)" h="100vh" color="white">
    <ConnectWallet size="lg" colorScheme="blackAlpha" />
  </Center>
);
export default App;
