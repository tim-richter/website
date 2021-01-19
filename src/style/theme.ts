import { DefaultTheme } from 'styled-components';

/* istanbul ignore file */

const theme: DefaultTheme = {
  colors: {
    primary: '#FF5470',
    secondary: '#FDE24F',
    text: '#282828',
  },
  transitions: {
    base(target = 'all') {
      return `${target} 0.3s ease-in-out`;
    },
  },
  breakpoints: {
    xs: '0',
    sm: '40em',
    md: '50em',
    lg: '75em',
  },
  flexboxgrid: {
    breakpoints: {
      xs: 0, // em
      sm: 40, // em
      md: 50, // em
      lg: 75, // em
    },
  },
};

export default theme;
