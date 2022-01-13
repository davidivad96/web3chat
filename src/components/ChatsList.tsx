import { useCallback, useEffect, useState } from 'react';
import { Avatar, Box, Button, Flex, IconButton, Text, VStack, useDisclosure, Center } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { listAccountChats } from '../graphql/queries';
import { onCreateAccountChat } from '../graphql/subscriptions';
import { ListAccountChatsQuery, OnCreateAccountChatSubscription } from '../API';
import { Chat, GraphQLSubscription } from '../interfaces';
import CreateChatModal from './CreateChatModal';
import Observable from 'zen-observable';

interface Props {
  myAddress: string | undefined;
  updateCurrentChat: (chatID: string) => void;
}

const ChatsList: React.FunctionComponent<Props> = ({ myAddress, updateCurrentChat }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  const subscribeToNewChats = useCallback(
    async () =>
      (
        (await API.graphql(graphqlOperation(onCreateAccountChat, { accountID: myAddress }))) as Observable<
          GraphQLSubscription<OnCreateAccountChatSubscription>
        >
      ).subscribe({
        next: ({ value: { data } }) => {
          const newChat = data.onCreateAccountChat;
          setChats((chats) => [
            {
              id: newChat?.chat?.id,
              name: newChat?.chat?.name,
              participants: newChat?.chat?.accounts?.items.map((account) => ({
                address: account?.account?.id,
                avatarUrl: account?.account?.avatarUrl,
              })),
            },
            ...chats,
          ]);
        },
        error: (error) => console.log({ error }),
      }),
    [myAddress],
  );

  useEffect(() => {
    fetchChats();
    const subscriptionPromise = subscribeToNewChats();
    return () => {
      subscriptionPromise.then((subscription) => subscription.unsubscribe());
    };
  }, [fetchChats, subscribeToNewChats]);

  if (isLoading) {
    return (
      <Center mt="12">
        <ClipLoader loading color="#1A2980" size={150} />
      </Center>
    );
  }

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
