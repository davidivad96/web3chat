import { ConnectWallet } from '@3rdweb/react';
import { Avatar, Center, Heading, Link, Text, VStack } from '@chakra-ui/react';

const Home: React.FunctionComponent = () => (
  <Center h="full" color="#FFF">
    <VStack spacing={5}>
      <VStack>
        <Avatar size="2xl" src="https://avatars.dicebear.com/api/bottts/web3chat.svg" bg="transparent" />
        <Heading fontSize="6xl">Welcome to Web3Chat!</Heading>
        <Text fontSize="3xl">Connect your wallet to start chatting</Text>
        <Text fontSize="xl">
          (You need to install{' '}
          <Link href="https://metamask.io/" isExternal>
            MetaMask
          </Link>{' '}
          to do it)
        </Text>
      </VStack>
      <ConnectWallet size="lg" colorScheme="blackAlpha" />
    </VStack>
  </Center>
);

export default Home;
