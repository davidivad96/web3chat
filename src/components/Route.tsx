import { Navigate } from 'react-router-dom';

const LoggedRoute = ({ isLoggedIn, children }: { isLoggedIn: boolean; children: JSX.Element }) =>
  isLoggedIn ? children : <Navigate to="/" />;

const NonLoggedRoute = ({ isLoggedIn, children }: { isLoggedIn: boolean; children: JSX.Element }) =>
  !isLoggedIn ? children : <Navigate to="/chat" />;

export { LoggedRoute, NonLoggedRoute };
