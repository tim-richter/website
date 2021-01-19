import { ThemeProvider } from 'styled-components';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ApolloProvider } from '@apollo/client';
import theme from '../style/theme';
import GlobalStyle from '../style/global';
import initFonts from '../util/fonts';
import Header from '../layouts/Header';
import { useApollo } from '../graphql/apolloClient';

export default function App({ Component, pageProps, router }) {
  const apolloClient = useApollo(pageProps);

  useEffect(() => {
    initFonts();
  }, []);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            transition={{ duration: 0.5 }}
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
      </ApolloProvider>
    </>
  );
}
