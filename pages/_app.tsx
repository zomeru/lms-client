import type { AppProps } from 'next/app';
import { GlobalStyles } from '@styles/index';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
