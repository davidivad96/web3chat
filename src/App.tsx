import { Box } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Trivia from './pages/Trivia';

const LoggedRoute = ({ children }: { children: JSX.Element }) => {
  return false ? children : <Navigate to="/" />;
};

const NonLoggedRoute = ({ children }: { children: JSX.Element }) => {
  return true ? children : <Navigate to="/chat" />;
};

const App: React.FunctionComponent = () => (
  <Box bgGradient="linear(to-r, #1A2980, #26D0CE)" h="100vh">
    <Routes>
      <Route
        path="/"
        element={
          <NonLoggedRoute>
            <Home />
          </NonLoggedRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <LoggedRoute>
            <Chat />
          </LoggedRoute>
        }
      />
      <Route
        path="/trivia"
        element={
          <LoggedRoute>
            <Trivia />
          </LoggedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Box>
);

export default App;
