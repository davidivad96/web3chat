import { useCallback, useContext, useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Center,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { listAccounts } from '../graphql/queries';
import { ListAccountsQuery } from '../API';
import { Account } from '../interfaces';
import { AccountContext } from '../contexts/Account';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AccountsModal: React.FunctionComponent<Props> = ({ isOpen, onClose }) => {
  const {
    account: { address },
  } = useContext(AccountContext);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAccounts = useCallback(async () => {
    setIsLoading(true);
    const { data: listAccountsData } = (await API.graphql(
      graphqlOperation(listAccounts),
    )) as GraphQLResult<ListAccountsQuery>;
    const items = listAccountsData?.listAccounts?.items;
    if (items) {
      setAccounts(
        items
          .filter((account) => account?.address !== address)
          .map((account) => ({
            address: account?.address,
            avatarUrl: account?.avatarUrl,
          })),
      );
    }
    setIsLoading(false);
  }, [address]);

  useEffect(() => {
    if (isOpen) {
      fetchAccounts();
    }
  }, [isOpen, fetchAccounts]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered scrollBehavior="inside" size="xl">
      <ModalOverlay />
      <ModalContent minH={180}>
        <ModalHeader>New chat</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <Center>
              <ClipLoader loading color="#1A2980" />
            </Center>
          ) : accounts.length !== 0 ? (
            <>
              {accounts.map((account) => (
                <Button key={account.address} variant="outline" mb="6">
                  <HStack>
                    <Avatar size="md" bg="#dedede" src={account.avatarUrl} />
                    <Text>{account.address}</Text>
                  </HStack>
                </Button>
              ))}
            </>
          ) : (
            <Text>Ups! There are no accounts at the moment</Text>
          )}
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AccountsModal;
