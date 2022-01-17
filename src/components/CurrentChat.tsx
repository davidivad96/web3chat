import { useState, useCallback, useEffect, useRef } from 'react';
import {
  Avatar,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { getChat } from '../graphql_custom/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import { createMessage } from '../graphql/mutations';
import { CreateMessageMutation, GetChatQuery, OnCreateMessageSubscription } from '../API';
import { GraphQLSubscription, Message } from '../interfaces';
import Observable from 'zen-observable';

interface Props {
  chatID: string;
  myAddress: string | undefined;
  myAvatarUrl: string | undefined;
}

const LIMIT = 50;

const CurrentChat: React.FunctionComponent<Props> = ({ chatID, myAddress, myAvatarUrl }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const nextToken = useRef<string>('');

  const updateText = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => setText(evt.target.value), []);

  const onClickSendMessage = useCallback(async () => {
    if (text) {
      setMessages((messages) => [
        ...messages,
        {
          id: uuidv4(),
          content: text,
          sender: {
            address: myAddress,
            avatarUrl: myAvatarUrl,
          },
        },
      ]);
      setText('');
      (await API.graphql(
        graphqlOperation(createMessage, { input: { chatID, accountID: myAddress, content: text } }),
      )) as GraphQLResult<CreateMessageMutation>;
    }
  }, [text, chatID, myAddress, myAvatarUrl]);

  const fetchCurrentChat = useCallback(async () => {
    const { data: getChatData } = (await API.graphql(
      graphqlOperation(getChat, {
        id: chatID,
        messagesSortDirection: 'DESC',
        messagesLimit: LIMIT,
        messagesNextToken: nextToken.current || null,
      }),
    )) as GraphQLResult<GetChatQuery>;
    const items = getChatData?.getChat?.messages?.items;
    if (items) {
      setMessages((messages) => [
        ...items
          .map((message) => ({
            id: message?.id,
            content: message?.content,
            sender: {
              address: message?.account?.id,
              avatarUrl: message?.account?.avatarUrl,
            },
          }))
          .reverse(),
        ...messages,
      ]);
    }
    const newNextToken = getChatData?.getChat?.messages?.nextToken;
    nextToken.current = newNextToken || '';
    setHasMore(!!nextToken.current);
    setIsLoading(false);
  }, [chatID]);

  const handleKeyPress = useCallback(
    (evt: React.KeyboardEvent<HTMLInputElement>) => {
      if (evt.key === 'Enter') {
        onClickSendMessage();
      }
    },
    [onClickSendMessage],
  );

  const subscribeToNewMessages = useCallback(
    async () =>
      (
        (await API.graphql(graphqlOperation(onCreateMessage, { chatID }))) as Observable<
          GraphQLSubscription<OnCreateMessageSubscription>
        >
      ).subscribe({
        next: ({ value: { data } }) => {
          const newMessage = data.onCreateMessage;
          if (newMessage?.account?.id !== myAddress) {
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
          }
        },
        error: (error) => console.log({ error }),
      }),
    [chatID, myAddress],
  );

  const resetState = useCallback(() => {
    setMessages([]);
    setText('');
    setIsLoading(true);
    setHasMore(true);
    nextToken.current = '';
  }, []);

  useEffect(() => {
    if (chatID) {
      resetState();
      fetchCurrentChat();
      const subscriptionPromise = subscribeToNewMessages();
      return () => {
        subscriptionPromise.then((subscription) => subscription.unsubscribe());
      };
    }
  }, [chatID, fetchCurrentChat, resetState, subscribeToNewMessages]);

  return (
    <>
      {!chatID ? (
        <Center>
          <Heading>No current chat</Heading>
        </Center>
      ) : isLoading ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <Flex id="scrollabeContainer" flexDir="column-reverse" h="calc(100vh - 75px)" overflowY="scroll">
          <InputGroup bg="#FFF" minH="45" borderColor="#2298B4" zIndex={1}>
            <Input value={text} onChange={updateText} onKeyPress={handleKeyPress} pos="fixed" />
            <InputRightElement>
              <IconButton
                aria-label="Send Message"
                icon={<ChevronRightIcon />}
                size="md"
                colorScheme="blue"
                onClick={onClickSendMessage}
                pos="fixed"
              />
            </InputRightElement>
          </InputGroup>
          <InfiniteScroll
            inverse
            dataLength={messages.length}
            next={fetchCurrentChat}
            hasMore={hasMore}
            loader={
              <Center>
                <Text>...</Text>
              </Center>
            }
            scrollThreshold={0.8}
            scrollableTarget="scrollabeContainer"
            style={{ display: 'flex', flexDirection: 'column-reverse' }}
          >
            <VStack p="4" w="full">
              {messages.map((message) => (
                <HStack
                  key={message.id}
                  alignSelf={message.sender?.address === myAddress ? 'flex-end' : 'flex-start'}
                  flexDir={message.sender?.address === myAddress ? 'row' : 'row-reverse'}
                >
                  <Avatar src={message.sender?.avatarUrl} bg="transparent" mx="2" size="sm" zIndex={0} />
                  <Tag p="3">{message.content}</Tag>
                </HStack>
              ))}
            </VStack>
          </InfiniteScroll>
        </Flex>
      )}
    </>
  );
};

export default CurrentChat;
