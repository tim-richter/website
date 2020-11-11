import { ThemeProvider } from 'styled-components';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import theme from '../style/theme';
import GlobalStyle from '../style/global';
import Fonts from '../components/Fonts';
import Header from "../layouts/Header";

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    Fonts();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </>
  );
}
