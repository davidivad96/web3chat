import { useContext } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ConnectWallet } from '@3rdweb/react';
import ChatLogo from '../../public/chat_logo.svg';
import QuizLogo from '../../public/quiz_logo.svg';
import { AccountContext } from '../contexts/Account';

const Links = [
  { title: 'Chat', to: '/chat' },
  { title: 'Quiz', to: '/quiz' },
];

interface Props {
  page: 'chat' | 'quiz';
}

const Navbar: React.FunctionComponent<Props> = ({ page = 'chat' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    account: { avatarUrl },
  } = useContext(AccountContext);

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={6}>
      <Flex h="75px" alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ sm: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Image src={page === 'quiz' ? QuizLogo : ChatLogo} width={50} />
          <HStack as="nav" spacing={4} display={{ base: 'none', sm: 'flex' }}>
            {Links.map((link) => (
              <Button
                key={link.title}
                as={ReachLink}
                to={link.to}
                variant="solid"
                colorScheme="blue"
                _hover={{ opacity: 0.5 }}
              >
                {link.title}
              </Button>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <ConnectWallet display={{ base: 'none', md: 'flex' }} />
          <Menu>
            <MenuButton rounded="full" variant="link" cursor="pointer" pl="5">
              <Avatar size="md" bg="#dedede" src={avatarUrl} />
            </MenuButton>
            <MenuList display={{ md: 'none' }}>
              <MenuItem>
                <ConnectWallet />
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {isOpen && (
        <Box py={4} display={{ md: 'none' }}>
          <Stack spacing={4}>
            {Links.map((link) => (
              <Button
                key={link.title}
                as={ReachLink}
                to={link.to}
                variant="solid"
                colorScheme="blue"
                _hover={{ opacity: 0.5 }}
              >
                {link.title}
              </Button>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
