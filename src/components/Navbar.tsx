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

const Links = [
  { title: 'Chat', to: '/chat' },
  { title: 'Quiz', to: '/quiz' },
];

interface Props {
  page: 'chat' | 'quiz';
}

const Navbar: React.FunctionComponent<Props> = ({ page = 'chat' }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={6}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
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
                bg="#1E619A"
                color="white"
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
              <Avatar
                size="md"
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
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
                bg="#1E619A"
                color="white"
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
