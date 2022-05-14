import React from 'react';

import { Layout, NextSeoHead } from '@/components';
import { BookDescription as BookDes } from '@/components/_page/Books';

const BookDescription = () => {
  return (
    <>
      <NextSeoHead />
      <Layout>
        <BookDes />
      </Layout>
    </>
  );
};

export default BookDescription;
