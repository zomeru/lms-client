import React from 'react';

import { Layout, NextSeoHead } from '@/components';
import { NotFound } from '@/components/_page/404';

const PageNotFound = () => {
  return (
    <>
      <NextSeoHead />
      <Layout>
        <NotFound />
      </Layout>
    </>
  );
};

export default PageNotFound;
