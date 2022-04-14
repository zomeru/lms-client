import type { AppProps } from 'next/app';
import { GlobalStyles } from '@styles/index';
import React from 'react';

import { ThemeProvider } from '@/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
