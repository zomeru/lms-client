import React from 'react';

import { Layout, NextSeoHead } from '@/components';
import { AuthSection } from '@/components/_page/Auth';

const Auth = () => {
  return (
    <>
      <NextSeoHead />
      <Layout>
        <AuthSection />
      </Layout>
    </>
  );
};

export default Auth;
