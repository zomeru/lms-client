import React from 'react';
import { NextSeo, NextSeoProps } from 'next-seo';
import Head from 'next/head';

import { APP_NAME } from '@/constants';

interface NextSeoHeadProps {
  rest?: NextSeoProps;
}

const NextSeoHead = ({ rest }: NextSeoHeadProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo
        title={APP_NAME}
        titleTemplate={APP_NAME}
        defaultTitle={APP_NAME}
        description="From applied literature to education resources, we have a lot of textbooks to provide you."
        {...rest}
      />
    </>
  );
};

export default NextSeoHead;
