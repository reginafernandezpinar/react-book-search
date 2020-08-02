import React from 'react';

// Import Components
import Header from '../Header';

import './styles.scss';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = props => {
  return (
    <>
      <Header />
      <main id="layout">{props.children}</main>
    </>
  );
};
