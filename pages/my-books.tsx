import React from 'react';

import { Layout, NextSeoHead } from '@/components';
import { Queue } from '@/components/_page/MyBooks';

const MyBooks = () => {
  return (
    <>
      <NextSeoHead />
      <Layout>
        <Queue />
      </Layout>
    </>
  );
};

export default MyBooks;
