import { useState, useEffect, useCallback, useContext } from 'react';
import { Center, SimpleGrid, Text } from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import Navbar from '../components/Navbar';
import ChatsList from '../components/ChatsList';
import CurrentChat from '../components/CurrentChat';
import { Chat as ChatInterface, Message, GraphQLSubscription } from '../interfaces';
import { listAccountChats } from '../graphql/queries';
import { getChat } from '../graphql_custom/queries';
import { createMessage } from '../graphql/mutations';
import { onCreateAccountChat, onCreateMessage } from '../graphql/subscriptions';
import {
  CreateMessageMutation,
  GetChatQuery,
  ListAccountChatsQuery,
  OnCreateAccountChatSubscription,
  OnCreateMessageSubscription,
} from '../API';
import { AccountContext } from '../contexts/Account';
import Observable from 'zen-observable';

const Chat: React.FunctionComponent = () => {
  const {
    account: { address: myAddress },
  } = useContext(AccountContext);
  const [isLoadingChats, setIsLoadingChats] = useState<boolean>(false);
  const [isLoadingCurrentChat, setIsLoadingCurrentChat] = useState<boolean>(false);
  const [chats, setChats] = useState<ChatInterface[]>([]);
  const [currentChat, setCurrentChat] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>('');

  const updateCurrentChat = useCallback((chatID: string) => setCurrentChat(chatID), []);
  const updateText = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => setText(evt.target.value), []);

  const onClickSendMessage = useCallback(async () => {
    if (text) {
      (await API.graphql(
        graphqlOperation(createMessage, { input: { chatID: currentChat, accountID: myAddress, content: text } }),
      )) as GraphQLResult<CreateMessageMutation>;
      setText('');
    }
  }, [currentChat, myAddress, text]);

  const handleKeyPress = useCallback(
    (evt: React.KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === 'Enter') {
        onClickSendMessage();
      }
    },
    [onClickSendMessage],
  );

  const fetchChats = useCallback(async () => {
    setIsLoadingChats(true);
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
    setIsLoadingChats(false);
  }, [myAddress]);

  const fetchCurrentChat = useCallback(async () => {
    setIsLoadingCurrentChat(true);
    const { data: getChatData } = (await API.graphql(
      graphqlOperation(getChat, { id: currentChat, messagesSortDirection: 'DESC' }),
    )) as GraphQLResult<GetChatQuery>;
    const items = getChatData?.getChat?.messages?.items;
    if (items) {
      setMessages(
        items
          .map((message) => ({
            id: message?.id,
            content: message?.content,
            sender: {
              address: message?.account?.id,
              avatarUrl: message?.account?.avatarUrl,
            },
          }))
          .reverse(),
      );
    }
    setIsLoadingCurrentChat(false);
  }, [currentChat]);

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

  const subscribeToNewMessages = useCallback(
    async () =>
      (
        (await API.graphql(graphqlOperation(onCreateMessage, { chatID: currentChat }))) as Observable<
          GraphQLSubscription<OnCreateMessageSubscription>
        >
      ).subscribe({
        next: ({ value: { data } }) => {
          const newMessage = data.onCreateMessage;
          setMessages((messages) => [
            ...messages,
            {
              id: newMessage?.id,
              content: newMessage?.content,
              sender: {
                address: newMessage?.account?.id,
                avatarUrl: newMessage?.account?.avatarUrl,
              },
            },
          ]);
        },
        error: (error) => console.log({ error }),
      }),
    [currentChat],
  );

  useEffect(() => {
    fetchChats();
    const subscriptionPromise = subscribeToNewChats();
    return () => {
      subscriptionPromise.then((subscription) => subscription.unsubscribe());
    };
  }, [fetchChats, subscribeToNewChats]);

  useEffect(() => {
    if (currentChat) {
      fetchCurrentChat();
      const subscriptionPromise = subscribeToNewMessages();
      return () => {
        subscriptionPromise.then((subscription) => subscription.unsubscribe());
      };
    }
  }, [currentChat, fetchCurrentChat, subscribeToNewMessages]);

  return (
    <>
      <Navbar page="chat" />
      {isLoadingChats ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <SimpleGrid columns={2}>
          <ChatsList chats={chats} myAddress={myAddress} updateCurrentChat={updateCurrentChat} />
          {!currentChat ? (
            <Text>No current chat</Text>
          ) : isLoadingCurrentChat ? (
            <Center mt="12">
              <ClipLoader loading color="#1A2980" size={150} />
            </Center>
          ) : (
            <CurrentChat
              messages={messages}
              myAddress={myAddress}
              text={text}
              updateText={updateText}
              handleKeyPress={handleKeyPress}
              onClickSendMessage={onClickSendMessage}
            />
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default Chat;
