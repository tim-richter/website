import { ThemeProvider } from 'styled-components';
import React, { useEffect } from 'react';
import theme from '../style/theme';
import GlobalStyle from '../style/global';
import Fonts from '../components/Fonts';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Fonts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
