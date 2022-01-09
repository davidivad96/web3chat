import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Center } from '@chakra-ui/react';
import PuffLoader from 'react-spinners/PuffLoader';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Trivia from './pages/Trivia';
import useAuthentication from './hooks/useAuthentication';
import { LoggedRoute, NonLoggedRoute } from './components/Route';

const App: React.FunctionComponent = () => {
  const { isLoading, isLoggedIn } = useAuthentication();

  return (
    <Box bgGradient="linear(to-r, #1A2980, #26D0CE)" h="100vh">
      {isLoading ? (
        <Center h="100%">
          <PuffLoader loading size={280} color="#1A2980" />
        </Center>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <NonLoggedRoute isLoggedIn={isLoggedIn}>
                <Home />
              </NonLoggedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <LoggedRoute isLoggedIn={isLoggedIn}>
                <Chat />
              </LoggedRoute>
            }
          />
          <Route
            path="/trivia"
            element={
              <LoggedRoute isLoggedIn={isLoggedIn}>
                <Trivia />
              </LoggedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Box>
  );
};

export default App;
