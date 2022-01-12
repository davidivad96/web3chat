import { useState, useEffect, useCallback, useContext } from 'react';
import { Box, Center, IconButton, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import Navbar from '../components/Navbar';
import CreateChatModal from '../components/CreateChatModal';
import { Chat as ChatInterface } from '../interfaces';
import { listAccountChats } from '../graphql/queries';
import { ListAccountChatsQuery } from '../API';
import { AccountContext } from '../contexts/Account';

const Chat: React.FunctionComponent = () => {
  const {
    account: { address: myAddress },
  } = useContext(AccountContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chats, setChats] = useState<ChatInterface[]>([]);
  /* 
  const fetchMessages = useCallback(async () => {
    setIsLoading(true);
    const { data: listMessagesData } = (await API.graphql(
      graphqlOperation(listMessages),
    )) as GraphQLResult<ListMessagesQuery>;
    const items = listMessagesData?.listMessages?.items;
    if (items) {
      setMessages(
        items?.map((item) => ({
          content: item?.content,
          owner: item?.accountID,
          timestamp: Date.parse(item?.createdAt || ''),
        })),
      );
    }
    setIsLoading(false);
  }, []);

  const subscribeToNewMessages = useCallback(
    async () =>
      (
        (await API.graphql(graphqlOperation(onCreateMessage))) as Observable<
          GraphQLSubscription<OnCreateMessageSubscription>
        >
      ).subscribe({
        next: ({ value: { data } }) => {
          const newMessage = data.onCreateMessage;
          setMessages((messages) => [
            ...messages,
            {
              content: newMessage?.content,
              owner: newMessage?.accountID,
              timestamp: Date.parse(newMessage?.createdAt || ''),
            },
          ]);
        },
        error: (error) => console.log({ error }),
      }),
    [],
  );
*/

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

  useEffect(() => {
    fetchChats();
    // TODO: subscribe to OnCreateAccountChat(accountID=myAddress)
  }, [fetchChats]);

  return (
    <Box bg="#dedede" h="full" borderRadius={3}>
      <Navbar page="chat" />
      {isLoading ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <>
          <VStack>
            {chats.map((chat) => (
              <Text key={chat.id}>{chat.name}</Text>
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
