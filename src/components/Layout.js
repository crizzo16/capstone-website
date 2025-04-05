import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col celia-width">
      {children}
    </div>
  );
};

export default Layout;