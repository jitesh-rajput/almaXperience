import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  console.log("Protected ??????????"+currentUser)
  return (
        currentUser ? (
          <Component />
        ) : (
          <Navigate to="/login" replace={true} />
        )
  );
};

export default ProtectedRoute;
