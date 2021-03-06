import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { darken } from 'polished';

/* istanbul ignore file */

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 18px;
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

  h2 {
    margin-top: 4rem;
  }

  p {
    line-height: 1.4;
  }

  blockquote {
    text-align: center;
    border-radius: 5px;
    margin: 46px 24px;
    padding: 8px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.secondary};

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin: 46px 0;
    }
  }

  ul li {
    line-height: 1.6;
  }

  pre[class*="language-"] {
    box-shadow: 0 0 5px #c4c4c4;
    border-radius: 10px;
    margin: 2rem 0 1rem 0 !important;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #e53935;
    background: #ffffff;
    font-family: Roboto Mono, monospace;
    font-size: .9rem;
    line-height: 1.3rem;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code[class*="language-"]::-moz-selection,
  pre[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection,
  pre[class*="language-"] ::-moz-selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  code[class*="language-"]::selection,
  pre[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"] ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  :not(pre) > code[class*="language-"] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*="language-"] {
    overflow: auto;
    position: relative;
    margin: 2rem 0;
    padding: 1rem 1rem;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #f76d47;
  }

  [class*="language-"] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #7c4dff;
  }

  .token.parameter {
    color: #f6a434;
  }

  .token.attr-name {
    color: #39adb5;
  }

  .token.attr-value {
    color: #f6a434;
  }

  .token.attribute {
    color: #f6a434;
  }

  .token.boolean {
    color: #7c4dff;
  }

  .token.builtin {
    color: #39adb5;
  }

  .token.cdata {
    color: #39adb5;
  }

  .token.char {
    color: #39adb5;
  }

  .token.class {
    color: #39adb5;
  }

  .token.class-name {
    color: #6182b8;
  }

  .token.comment {
    color: #aabfc9;
  }

  .token.constant {
    color: #7c4dff;
  }

  .token.deleted {
    color: #e53935;
  }

  .token.doctype {
    color: #aabfc9;
  }

  .token.entity {
    color: #e53935;
  }

  .token.function {
    color: #7c4dff;
  }

  .token.hexcode {
    color: #f76d47;
  }

  .token.id {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.important {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.inserted {
    color: #39adb5;
  }

  .token.keyword {
    color: #7c4dff;
  }

  .token.number {
    color: #f76d47;
  }

  .token.operator {
    color: #39adb5;
  }

  .token.prolog {
    color: #aabfc9;
  }

  .token.property {
    color: #39adb5;
  }

  .token.pseudo-class {
    color: #f6a434;
  }

  .token.pseudo-element {
    color: #f6a434;
  }

  .token.punctuation {
    color: #39adb5;
  }

  .token.regex {
    color: #6182b8;
  }

  .token.selector {
    color: #e53935;
  }

  .token.string {
    color: #f6a434;
  }

  .token.symbol {
    color: #7c4dff;
  }

  .token.tag {
    color: #e53935;
  }

  .token.unit {
    color: #f76d47;
  }

  .token.url {
    color: #e53935;
  }

  .token.variable {
    color: #e53935;
  }
`;

export default GlobalStyle;
