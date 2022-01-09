import { ConnectWallet } from '@3rdweb/react';
import { Center, Heading, Text, VStack } from '@chakra-ui/react';

const Home: React.FunctionComponent = () => (
  <Center h="full" color="white">
    <VStack spacing={5}>
      <VStack>
        <Heading fontSize="6xl">Welcome to Web3Chat!</Heading>
        <Text fontSize="3xl">Connect your wallet to start chatting</Text>
      </VStack>
      <ConnectWallet size="lg" colorScheme="blackAlpha" />
    </VStack>
  </Center>
);

export default Home;
