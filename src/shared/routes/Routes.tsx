import React from 'react';
import AppStack from './AppStack';
import LoginStack from './LoginStack';

const Routes = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <AppStack /> : <LoginStack />;
};

export default Routes;
