import type { AppProps } from 'next/app';
import { GlobalStyles } from '@styles/index';
import React from 'react';

import { AuthProvider, ThemeProvider } from '@/contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
