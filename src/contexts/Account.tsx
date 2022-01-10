import React, { useState, useCallback } from 'react';
import { Account } from '../interfaces';

interface ContextProps {
  account: Account;
  updateAccount: (newAccount: Account) => void;
}

const AccountContext = React.createContext<ContextProps>({} as ContextProps);

const AccountProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [account, setAccount] = useState<Account>({});

  const updateAccount = useCallback((newAccount: Account) => setAccount(newAccount), []);

  return <AccountContext.Provider value={{ account, updateAccount }}>{children}</AccountContext.Provider>;
};

export { AccountProvider, AccountContext };
