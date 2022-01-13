import { Avatar, Flex, HStack, IconButton, Input, InputGroup, InputRightElement, Tag, VStack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Message } from '../interfaces';

interface Props {
  messages: Message[];
  myAddress: string | undefined;
  text: string;
  updateText: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (evt: React.KeyboardEvent<HTMLInputElement>) => void;
  onClickSendMessage: () => void;
}

const CurrentChat: React.FunctionComponent<Props> = ({
  messages,
  myAddress,
  text,
  updateText,
  handleKeyPress,
  onClickSendMessage,
}) => (
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

export default CurrentChat;
