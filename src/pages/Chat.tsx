import { useState, useEffect, useCallback, useContext } from 'react';
import { Center, SimpleGrid } from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import Navbar from '../components/Navbar';
import ChatsList from '../components/ChatsList';
import CurrentChat from '../components/CurrentChat';
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chats, setChats] = useState<ChatInterface[]>([]);
  const [currentChat, setCurrentChat] = useState<string>('');

  const updateCurrentChat = useCallback((chatID: string) => setCurrentChat(chatID), []);

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

  return (
    <>
      <Navbar page="chat" />
      {isLoading ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <SimpleGrid columns={2}>
          <ChatsList chats={chats} myAddress={myAddress} updateCurrentChat={updateCurrentChat} />
          <CurrentChat chatID={currentChat} myAddress={myAddress} />
        </SimpleGrid>
      )}
    </>
  );
};

export default Chat;
