import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem("userData");
  console.log(isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
