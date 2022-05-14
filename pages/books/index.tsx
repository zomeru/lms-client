import React from 'react';

import { Layout, NextSeoHead } from '@/components';
import { BookSection } from '@/components/_page/Books';

const Books = () => {
  return (
    <>
      <NextSeoHead />
      <Layout>
        <BookSection />
      </Layout>
    </>
  );
};

export default Books;
