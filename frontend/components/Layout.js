import React from 'react';

const Layout = ({children}) => {
  return (
    <>
      <div>
        <h1>Layout prueba</h1>
      </div>
      {children}
      <footer>
        <h2>Footet</h2>
      </footer>
    </>
  );
};

export default Layout;
