import { Avatar, Box, Button, Flex, IconButton, Text, VStack, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CreateChatModal from './CreateChatModal';
import { Chat } from '../interfaces';

interface Props {
  chats: Chat[];
  myAddress: string | undefined;
  updateCurrentChat: (chatID: string) => void;
}

const ChatsList: React.FunctionComponent<Props> = ({ chats, myAddress, updateCurrentChat }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack py="3" bg="#dedede" pos="relative" h="calc(100vh - 75px)" overflowY="scroll">
      {chats.map((chat) => (
        <Button
          key={chat.id}
          bg="#FFF"
          borderRadius="5"
          px="5"
          py="6"
          onClick={() => chat.id && updateCurrentChat(chat.id)}
        >
          <Flex direction="row" align="center">
            <Box>
              {chat.participants
                ?.filter((participant) => participant.address !== myAddress)
                .map((participant) => (
                  <Avatar key={participant.address} size="sm" src={participant.avatarUrl} />
                ))}
            </Box>
            <Text ml={chat.participants?.length && chat.participants.length > 1 ? '3' : 'auto'}>{chat.name}</Text>
          </Flex>
        </Button>
      ))}
      <IconButton aria-label="Create New Chat" icon={<AddIcon />} onClick={onOpen} pos="absolute" top="0.5" right="5" />
      <CreateChatModal isOpen={isOpen} onClose={onClose} />
    </VStack>
  );
};

export default ChatsList;
