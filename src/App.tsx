import { Routes, Route, Navigate } from 'react-router-dom';
import { useWeb3 } from '@3rdweb/hooks';
import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Trivia from './pages/Trivia';

const LoggedRoute = ({ isLoggedIn, children }: { isLoggedIn: boolean; children: JSX.Element }) =>
  isLoggedIn ? children : <Navigate to="/" />;

const NonLoggedRoute = ({ isLoggedIn, children }: { isLoggedIn: boolean; children: JSX.Element }) =>
  !isLoggedIn ? children : <Navigate to="/chat" />;

const App: React.FunctionComponent = () => {
  const { address } = useWeb3();

  return (
    <Box bgGradient="linear(to-r, #1A2980, #26D0CE)" h="100vh">
      <Routes>
        <Route
          path="/"
          element={
            <NonLoggedRoute isLoggedIn={!!address}>
              <Home />
            </NonLoggedRoute>
          }
        />
        <Route
          path="/chat"
          element={
            <LoggedRoute isLoggedIn={!!address}>
              <Chat />
            </LoggedRoute>
          }
        />
        <Route
          path="/trivia"
          element={
            <LoggedRoute isLoggedIn={!!address}>
              <Trivia />
            </LoggedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Box>
  );
};

export default App;
