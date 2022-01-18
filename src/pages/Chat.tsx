import { useState, useCallback, useContext } from 'react';
import { Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ChatsList from '../components/ChatsList';
import CurrentChat from '../components/CurrentChat';
import MotionBox from '../components/MotionBox';
import { AccountContext } from '../contexts/Account';

const Chat: React.FunctionComponent = () => {
  const {
    account: { address: myAddress, avatarUrl: myAvatarUrl },
  } = useContext(AccountContext);
  const [currentChat, setCurrentChat] = useState<string>('');

  const updateCurrentChat = useCallback((chatID: string) => setCurrentChat(chatID), []);

  return (
    <>
      <Navbar page="chat" />
      <Flex>
        <MotionBox w="100%" animate={{ width: !!currentChat ? '50%' : '100%' }}>
          <ChatsList myAddress={myAddress} updateCurrentChat={updateCurrentChat} />
        </MotionBox>
        <MotionBox w="0" animate={{ width: !!currentChat ? '50%' : '0' }} opacity={!!currentChat ? 1 : 0}>
          <CurrentChat chatID={currentChat} myAddress={myAddress} myAvatarUrl={myAvatarUrl} />
        </MotionBox>
      </Flex>
    </>
  );
};

export default Chat;
