// components/MyNav.tsx
import React from 'react';

type MyNavProps = {
  currentPath: string;
};

const MyNav: React.FC<MyNavProps> = ({ currentPath }) => {
  const isActive = (path: string) => currentPath === path;

  return (
    <nav>
      <a className={isActive('/') ? 'active' : ''} href="/">Home</a>
      <a className={isActive('/about') ? 'active' : ''} href="/about">About</a>
      {/* Add more links here */}
    </nav>
  );
};

export default MyNav;