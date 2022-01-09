import { useState, useEffect, useCallback } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { getAccount } from '../graphql/queries';
import { createAccount } from '../graphql/mutations';
import { GetAccountQuery } from '../API';

interface ReturnValue {
  isLoading: boolean;
  isLoggedIn: boolean;
}

const useAuthentication = (): ReturnValue => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { address, balance } = useWeb3();

  useEffect(() => {
    if (balance?.formatted) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
    setIsLoggedIn(!!address);
  }, [address, balance?.formatted]);

  const addAccount = useCallback(async () => {
    const { data: getAccountData } = (await API.graphql(
      graphqlOperation(getAccount, { address }),
    )) as GraphQLResult<GetAccountQuery>;
    if (!getAccountData?.getAccount) {
      await API.graphql(graphqlOperation(createAccount, { input: { address, avatarUrl: 'another_avatar_url' } }));
    }
  }, [address]);

  useEffect(() => {
    if (isLoggedIn) {
      addAccount();
    }
  }, [isLoggedIn, addAccount]);

  return {
    isLoading,
    isLoggedIn,
  };
};

export default useAuthentication;
