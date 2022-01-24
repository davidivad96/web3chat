import { useState, useCallback, useEffect, useRef } from 'react';
import { Center, Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { Virtuoso } from 'react-virtuoso';
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { getChat } from '../graphql_custom/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import { createMessage } from '../graphql/mutations';
import { GetChatQuery, OnCreateMessageSubscription } from '../API';
import { GraphQLSubscription, Message as MessageInterface } from '../interfaces';
import Observable from 'zen-observable';
import Message from './Message';

interface Props {
  chatID: string;
  myAddress: string | undefined;
  myAvatarUrl: string | undefined;
}

const LIMIT = 50;
const START_INDEX = 10000;

const CurrentChat: React.FunctionComponent<Props> = ({ chatID, myAddress, myAvatarUrl }) => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [firstItemIndex, setFirstItemIndex] = useState<number>(START_INDEX);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const nextToken = useRef<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickSendMessage = useCallback(async () => {
    if (inputRef.current?.value) {
      const content = inputRef.current.value;
      setMessages((messages) => [
        ...messages,
        {
          id: uuidv4(),
          content,
          sender: {
            address: myAddress,
            avatarUrl: myAvatarUrl,
          },
        },
      ]);
      inputRef.current.value = '';
      await API.graphql(graphqlOperation(createMessage, { input: { chatID, accountID: myAddress, content } }));
    }
  }, [chatID, myAddress, myAvatarUrl]);

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
      setFirstItemIndex((firstItemIndex) => firstItemIndex - items.length);
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
      {isLoading ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : (
        <Flex flexDir="column-reverse" h="calc(100vh - 75px)" overflowY="scroll">
          <InputGroup bg="#FFF" minH="45" borderColor="#2298B4" zIndex={1}>
            <Input onKeyPress={handleKeyPress} pos="fixed" ref={inputRef} />
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
          <Virtuoso
            firstItemIndex={firstItemIndex}
            initialTopMostItemIndex={LIMIT}
            data={messages}
            startReached={hasMore ? fetchCurrentChat : undefined}
            overscan={2000}
            alignToBottom
            followOutput="smooth"
            itemContent={(_index, message) => (
              <Message isMyMessage={message.sender?.address === myAddress} message={message} myAddress={myAddress} />
            )}
          />
        </Flex>
      )}
    </>
  );
};

export default CurrentChat;
