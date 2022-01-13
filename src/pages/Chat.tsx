import { useState, useCallback, useContext } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import ChatsList from '../components/ChatsList';
import CurrentChat from '../components/CurrentChat';
import { AccountContext } from '../contexts/Account';

const Chat: React.FunctionComponent = () => {
  const {
    account: { address: myAddress },
  } = useContext(AccountContext);
  const [currentChat, setCurrentChat] = useState<string>('');

  const updateCurrentChat = useCallback((chatID: string) => setCurrentChat(chatID), []);

  return (
    <>
      <Navbar page="chat" />
      <SimpleGrid columns={2}>
        <ChatsList myAddress={myAddress} updateCurrentChat={updateCurrentChat} />
        <CurrentChat chatID={currentChat} myAddress={myAddress} />
      </SimpleGrid>
    </>
  );
};

export default Chat;
