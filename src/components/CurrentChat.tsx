import { useState, useCallback, useEffect } from 'react';
import {
  Avatar,
  Center,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { GraphQLSubscription, Message } from '../interfaces';
import { getChat } from '../graphql_custom/queries';
import { onCreateMessage } from '../graphql/subscriptions';
import { createMessage } from '../graphql/mutations';
import { CreateMessageMutation, GetChatQuery, OnCreateMessageSubscription } from '../API';
import Observable from 'zen-observable';

interface Props {
  chatID: string;
  myAddress: string | undefined;
}

const CurrentChat: React.FunctionComponent<Props> = ({ chatID, myAddress }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateText = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => setText(evt.target.value), []);

  const onClickSendMessage = useCallback(async () => {
    if (text) {
      (await API.graphql(
        graphqlOperation(createMessage, { input: { chatID, accountID: myAddress, content: text } }),
      )) as GraphQLResult<CreateMessageMutation>;
      setText('');
    }
  }, [text, chatID, myAddress]);

  const fetchCurrentChat = useCallback(async () => {
    setIsLoading(true);
    const { data: getChatData } = (await API.graphql(
      graphqlOperation(getChat, { id: chatID, messagesSortDirection: 'DESC' }),
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
    [chatID],
  );

  useEffect(() => {
    if (chatID) {
      fetchCurrentChat();
      const subscriptionPromise = subscribeToNewMessages();
      return () => {
        subscriptionPromise.then((subscription) => subscription.unsubscribe());
      };
    }
  }, [chatID, fetchCurrentChat, subscribeToNewMessages]);

  if (isLoading) {
    return (
      <Center mt="12">
        <ClipLoader loading color="#1A2980" size={150} />
      </Center>
    );
  }

  if (!chatID) {
    return <Text>No current chat</Text>;
  }

  return (
    <Flex flexDir="column-reverse" h="calc(100vh - 75px)" overflowY="scroll">
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
    </Flex>
  );
};

export default CurrentChat;
