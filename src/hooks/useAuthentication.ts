import { useState, useEffect, useCallback, useContext } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { getAccount } from '../graphql/queries';
import { createAccount } from '../graphql/mutations';
import { CreateAccountMutation, GetAccountQuery } from '../API';
import { generateRandomAvatar } from '../utils/functions';
import { AccountContext } from '../contexts/Account';

interface ReturnValue {
  isLoading: boolean;
  isLoggedIn: boolean;
}

const useAuthentication = (): ReturnValue => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { address, balance } = useWeb3();
  const { updateAccount } = useContext(AccountContext);

  useEffect(() => {
    if (balance?.formatted) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    setIsLoggedIn(!!address);
  }, [address, balance?.formatted]);

  const handleAuthentication = useCallback(async () => {
    const { data: getAccountData } = (await API.graphql(
      graphqlOperation(getAccount, { address }),
    )) as GraphQLResult<GetAccountQuery>;
    let account = getAccountData?.getAccount;
    if (!account) {
      const avatarUrl = generateRandomAvatar();
      const { data: createAccountData } = (await API.graphql(
        graphqlOperation(createAccount, {
          input: {
            address,
            avatarUrl,
          },
        }),
      )) as GraphQLResult<CreateAccountMutation>;
      account = createAccountData?.createAccount;
    }
    updateAccount({ address: account?.address, avatarUrl: account?.avatarUrl });
  }, [address, updateAccount]);

  useEffect(() => {
    if (isLoggedIn) {
      handleAuthentication();
    }
  }, [isLoggedIn, handleAuthentication]);

  return {
    isLoading,
    isLoggedIn,
  };
};

export default useAuthentication;
