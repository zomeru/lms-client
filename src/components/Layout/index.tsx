import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { StyledLayout } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledLayout>{children}</StyledLayout>
      <Footer />
    </>
  );
};

export default Layout;
