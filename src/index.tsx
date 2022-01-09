import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ThirdwebProvider } from '@3rdweb/react';
import { ConnectorOptions } from '@3rdweb/hooks';
import { BrowserRouter } from 'react-router-dom';

const supportedChainIds = [1, 4, 137, 250, 43114, 80001];
const connectors: Partial<ConnectorOptions> = {
  injected: {},
  walletconnect: {},
};

ReactDOM.render(
  <React.StrictMode>
    <ThirdwebProvider connectors={connectors} supportedChainIds={supportedChainIds}>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </ThirdwebProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
