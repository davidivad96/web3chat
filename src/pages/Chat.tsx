import { useState, useEffect, useCallback, useContext } from 'react';
import { Avatar, Box, Button, Center, HStack, IconButton, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import Navbar from '../components/Navbar';
import CreateChatModal from '../components/CreateChatModal';
import { Chat as ChatInterface, GraphQLSubscription } from '../interfaces';
import { listAccountChats } from '../graphql/queries';
import { onCreateAccountChat } from '../graphql/subscriptions';
import { ListAccountChatsQuery, OnCreateAccountChatSubscription } from '../API';
import { AccountContext } from '../contexts/Account';
import Observable from 'zen-observable';

const Chat: React.FunctionComponent = () => {
  const {
    account: { address: myAddress },
  } = useContext(AccountContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chats, setChats] = useState<ChatInterface[]>([]);

  const fetchChats = useCallback(async () => {
    setIsLoading(true);
    const { data: listAccountChatsData } = (await API.graphql(
      graphqlOperation(listAccountChats, { filter: { accountID: { eq: myAddress } } }),
    )) as GraphQLResult<ListAccountChatsQuery>;
    const items = listAccountChatsData?.listAccountChats?.items;
    if (items) {
      setChats(
        items?.map((item) => ({
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

  return (
    <Box bg="#dedede" h="full" borderRadius={3}>
      <Navbar page="chat" />
      {isLoading ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <>
          <VStack my="3">
            {chats.map((chat) => (
              <Button key={chat.id} bg="#FFF" borderRadius="5" p="6">
                <HStack spacing="4">
                  <Box>
                    {chat.participants
                      ?.filter((participant) => participant.address !== myAddress)
                      .map((participant) => (
                        <Avatar key={participant.address} size="sm" src={participant.avatarUrl} />
                      ))}
                  </Box>
                  <Text>{chat.name}</Text>
                </HStack>
              </Button>
            ))}
            <IconButton aria-label="Create New Chat" icon={<AddIcon />} onClick={onOpen} />
          </VStack>
          <CreateChatModal isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </Box>
  );
};

export default Chat;
