import { useState, useEffect, useCallback, useContext } from 'react';
import { Box, Center, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import Navbar from '../components/Navbar';
import AccountsModal from '../components/AccountsModal';
import { Conversation } from '../interfaces';
import { AccountContext } from '../contexts/Account';
import { listConversations } from '../graphql/queries';
import { ListConversationsQuery } from '../API';

const Chat: React.FunctionComponent = () => {
  const {
    account: { address: myAddress },
  } = useContext(AccountContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchConversations = useCallback(async () => {
    setIsLoading(true);
    const { data: listConversationsData } = (await API.graphql(
      graphqlOperation(listConversations, {
        filter: { or: [{ account1ID: { eq: myAddress } }, { account2ID: { eq: myAddress } }] },
      }),
    )) as GraphQLResult<ListConversationsQuery>;
    const items = listConversationsData?.listConversations?.items;
    if (items) {
      setConversations(
        items.map((conversation) => {
          const otherAccount = conversation?.account1ID === myAddress ? conversation?.account2 : conversation?.account1;
          return {
            with: {
              address: otherAccount?.address,
              avatarUrl: otherAccount?.avatarUrl,
            },
          };
        }),
      );
    }
    setIsLoading(false);
  }, [myAddress]);

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  return (
    <Box bg="#dedede" h="full" borderRadius={3}>
      <Navbar page="chat" />
      {isLoading ? (
        <Center mt="12">
          <ClipLoader loading color="#1A2980" size={150} />
        </Center>
      ) : conversations.length !== 0 ? (
        <Text>hello</Text>
      ) : (
        <>
          <Center>
            <Text>{"It seems you haven't started any conversation yet"}</Text>
            <IconButton aria-label="Add Chat" icon={<AddIcon />} onClick={onOpen} />
          </Center>
          <AccountsModal isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </Box>
  );
};

export default Chat;
