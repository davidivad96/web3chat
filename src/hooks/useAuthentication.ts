import { useState, useEffect } from 'react';
import { useWeb3 } from '@3rdweb/hooks';

const useAuthentication = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { address, balance } = useWeb3();

  useEffect(() => {
    if (balance?.formatted) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [balance?.formatted]);

  return {
    isLoading,
    isLoggedIn: !!address,
  };
};

export default useAuthentication;
