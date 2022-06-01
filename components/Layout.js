import React from 'react';
import Alert from './Alert';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <Alert />
      {children}
    </>
  );
};

export default Layout;
