// PrivateRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);

  console.log('PrivateRoute token:', token);

  if (!token) {
    console.log('No token found, redirecting to login.');
    return <Navigate to="/dashboard" />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
