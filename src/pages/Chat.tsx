import { useState, useEffect, useCallback, useContext } from 'react';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Tag,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import Navbar from '../components/Navbar';
import CreateChatModal from '../components/CreateChatModal';
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoading1, setIsLoading1] = useState<boolean>(false);
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

  const fetchCurrentChat = useCallback(async () => {
    setIsLoading1(true);
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
    setIsLoading1(false);
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
      {isLoading ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <SimpleGrid columns={2}>
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
            <IconButton
              aria-label="Create New Chat"
              icon={<AddIcon />}
              onClick={onOpen}
              pos="absolute"
              top="0.5"
              right="5"
            />
            <CreateChatModal isOpen={isOpen} onClose={onClose} />
          </VStack>
          {!currentChat ? (
            <Text>No current chat</Text>
          ) : isLoading1 ? (
            <Center mt="12">
              <ClipLoader loading color="#1A2980" size={150} />
            </Center>
          ) : (
            <Flex flexDir="column-reverse" h="calc(100vh - 75px)" overflowY="scroll">
              <InputGroup bg="#FFF" minH="45" borderColor="#2298B4">
                <Input value={text} onChange={updateText} onKeyPress={handleKeyPress} />
                <InputRightElement>
                  <IconButton
                    aria-label="Send Message"
                    icon={<ChevronRightIcon />}
                    size="md"
                    colorScheme="blue"
                    onClick={onClickSendMessage}
                  />
                </InputRightElement>
              </InputGroup>
              <VStack p="4" w="full">
                {messages.map((message) => (
                  <HStack
                    key={message.id}
                    alignSelf={message.sender?.address === myAddress ? 'flex-end' : 'flex-start'}
                    flexDir={message.sender?.address === myAddress ? 'row' : 'row-reverse'}
                  >
                    <Avatar src={message.sender?.avatarUrl} bg="transparent" mx="2" size="sm" />
                    <Tag p="3">{message.content}</Tag>
                  </HStack>
                ))}
              </VStack>
            </Flex>
          )}
        </SimpleGrid>
      )}
    </>
  );
};

export default Chat;
