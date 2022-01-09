import { useState, useEffect } from 'react';
import { useWeb3 } from '@3rdweb/hooks';

const useAuthentication = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { address } = useWeb3();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return {
    isLoading,
    isLoggedIn: !!address,
  };
};

export default useAuthentication;
