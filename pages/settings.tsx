import React from 'react';

import { Layout, NextSeoHead } from '@/components';
import Main from '@/components/_page/Settings/Main';

const Settings = () => {
  return (
    <>
      <NextSeoHead />
      <Layout>
        <Main />
      </Layout>
    </>
  );
};

export default Settings;
