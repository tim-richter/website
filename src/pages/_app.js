import { ThemeProvider } from 'styled-components'
import React from "react";
import theme from "../style/theme";
import GlobalStyle from "../style/global";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
