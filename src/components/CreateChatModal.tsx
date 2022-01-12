import { useState, useEffect, useContext, useCallback } from 'react';
import {
  Avatar,
  Button,
  Center,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { listAccounts } from '../graphql/queries';
import { createAccountChat, createChat } from '../graphql/mutations';
import { CreateChatMutation, ListAccountsQuery } from '../API';
import { Account } from '../interfaces';
import { AccountContext } from '../contexts/Account';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CreateChatModal: React.FunctionComponent<Props> = ({ isOpen, onClose }) => {
  const {
    account: { address: myAddress },
  } = useContext(AccountContext);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [chatName, setChatName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const updateSelected = useCallback((address: string) => {
    setSelected((selected) =>
      selected.includes(address) ? selected.filter((e) => e !== address) : [...selected, address || ''],
    );
  }, []);

  const updateChatName = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    setChatName(evt.target.value);
    setError(false);
  }, []);

  const isSelected = useCallback((address: string | undefined) => address && selected.includes(address), [selected]);

  const onCloseModal = useCallback(() => {
    setSelected([]);
    setChatName('');
    setError(false);
    onClose();
  }, [onClose]);

  const fetchAccounts = useCallback(async () => {
    setIsLoading(true);
    const { data: listAccountsData } = (await API.graphql(
      graphqlOperation(listAccounts, { filter: { id: { ne: myAddress } } }),
    )) as GraphQLResult<ListAccountsQuery>;
    const items = listAccountsData?.listAccounts?.items;
    if (items) {
      setAccounts(
        items.map((account) => ({
          address: account?.id,
          avatarUrl: account?.avatarUrl,
        })),
      );
    }
    setIsLoading(false);
  }, [myAddress]);

  const onClickCreateChat = useCallback(async () => {
    if (!chatName) {
      setError(true);
    } else {
      const { data: createChatData } = (await API.graphql(
        graphqlOperation(createChat, { input: { name: chatName } }),
      )) as GraphQLResult<CreateChatMutation>;
      const chatID = createChatData?.createChat?.id;
      for (const accountID of selected) {
        await API.graphql(graphqlOperation(createAccountChat, { input: { chatID, accountID } }));
      }
      await API.graphql(graphqlOperation(createAccountChat, { input: { chatID, accountID: myAddress } }));
      onCloseModal();
    }
  }, [chatName, myAddress, onCloseModal, selected]);

  useEffect(() => {
    if (isOpen) {
      fetchAccounts();
    }
  }, [isOpen, fetchAccounts]);

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} isCentered scrollBehavior="inside" size="xl">
      <ModalOverlay />
      <ModalContent minH={180}>
        <ModalHeader>New chat</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Chat Name"
            size="md"
            mb="5"
            value={chatName}
            onChange={updateChatName}
            isInvalid={error}
          />
          {isLoading ? (
            <Center>
              <ClipLoader loading color="#1A2980" />
            </Center>
          ) : accounts.length !== 0 ? (
            <VStack spacing="6" align="flex-start">
              {accounts.map((account) => (
                <Button
                  key={account.address}
                  variant="solid"
                  onClick={() => account.address && updateSelected(account.address)}
                  colorScheme={isSelected(account.address) ? 'blue' : 'blackAlpha'}
                >
                  <Avatar size="md" bg="#dedede" src={account.avatarUrl} />
                  <Text ml="3">{account.address}</Text>
                </Button>
              ))}
            </VStack>
          ) : (
            <Text>Ups! There are no accounts at the moment</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCloseModal}>
            Close
          </Button>
          <Button variant="ghost" onClick={onClickCreateChat}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateChatModal;
