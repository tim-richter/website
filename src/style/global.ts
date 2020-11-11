import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { darken } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 17px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.base('color')};
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${({ theme }) => darken(0.3, theme.colors.primary)};
    }
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default GlobalStyle;
