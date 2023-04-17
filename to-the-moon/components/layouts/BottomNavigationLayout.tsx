import React from 'react';
import BottomNavigation from '../BottomNavigation';

type Props = {
  children: React.ReactNode;
  currentPage: string;
};

const Layout: React.FC<Props> = ({ children, currentPage }) => {
  return (
    <>
      <div>{children}</div>
      <BottomNavigation currentPage={currentPage} />
    </>
  );
};

export default Layout;
