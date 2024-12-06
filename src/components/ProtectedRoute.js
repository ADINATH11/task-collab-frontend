// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return auth.token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
