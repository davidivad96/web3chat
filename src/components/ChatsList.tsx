import { useCallback, useEffect, useState } from 'react';
import { Avatar, Box, Button, Flex, IconButton, Text, VStack, useDisclosure, Center, Heading } from '@chakra-ui/react';
import { AddIcon, RepeatIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { listAccountChats } from '../graphql/queries';
import { ListAccountChatsQuery } from '../API';
import { Chat } from '../interfaces';
import CreateChatModal from './CreateChatModal';

interface Props {
  myAddress: string | undefined;
  updateCurrentChat: (chatID: string) => void;
}

const ChatsList: React.FunctionComponent<Props> = ({ myAddress, updateCurrentChat }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchChats = useCallback(async () => {
    setIsLoading(true);
    const { data: listAccountChatsData } = (await API.graphql(
      graphqlOperation(listAccountChats, { filter: { accountID: { eq: myAddress } } }),
    )) as GraphQLResult<ListAccountChatsQuery>;
    const items = listAccountChatsData?.listAccountChats?.items;
    if (items) {
      setChats(
        items.map((item) => ({
          id: item?.chat?.id,
          name: item?.chat?.name,
          participants: item?.chat?.accounts?.items.map((account) => ({
            address: account?.account?.id,
            avatarUrl: account?.account?.avatarUrl,
          })),
        })),
      );
    }
    setIsLoading(false);
  }, [myAddress]);

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  return (
    <Box py="3" bg="#dedede" pos="relative" h="calc(100vh - 75px)" overflowY="scroll">
      <VStack mb="5">
        <IconButton
          aria-label="Create New Chat"
          icon={<AddIcon />}
          onClick={onOpen}
          pos="sticky"
          alignSelf="end"
          top="2"
          right="8"
        />
        <Heading>Your chats</Heading>
        <IconButton aria-label="Refresh chats" icon={<RepeatIcon />} size="lg" onClick={fetchChats} />
      </VStack>
      {isLoading ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <VStack>
          <>
            <VStack>
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
                      {chat.participants?.map((participant) => (
                        <Avatar key={participant.address} size="sm" src={participant.avatarUrl} />
                      ))}
                    </Box>
                    <Text ml="3">{chat.name}</Text>
                  </Flex>
                </Button>
              ))}
            </VStack>
          </>
        </VStack>
      )}
      <CreateChatModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ChatsList;
