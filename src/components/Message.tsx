import { Avatar, Box, HStack, Tag } from '@chakra-ui/react';
import { Message as MessageInterface } from '../interfaces';
import SendDavidcoinsPopover from './SendDavidcoinsPopover';

interface Props {
  isMyMessage: boolean;
  message: MessageInterface;
  myAddress: string | undefined;
}

const Message: React.FunctionComponent<Props> = ({ isMyMessage, message, myAddress }) =>
  isMyMessage ? (
    <HStack key={message.id} alignSelf="flex-end" flexDir="row-reverse" py="1">
      <Box>
        <Avatar src={message.sender?.avatarUrl} bg="transparent" mx="2" size="sm" cursor="pointer" zIndex={0} />
      </Box>
      <Tag p="3">{message.content}</Tag>
    </HStack>
  ) : (
    <HStack key={message.id} alignSelf="flex-end" flexDir="row" py="1">
      <SendDavidcoinsPopover
        myAddress={myAddress}
        toAddress={message.sender?.address}
        avatarUrl={message.sender?.avatarUrl}
      />
      <Tag p="3">{message.content}</Tag>
    </HStack>
  );

export default Message;
