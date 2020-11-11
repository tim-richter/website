import { DefaultTheme } from 'styled-components';

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
    sm: '48em',
    md: '64em',
    lg: '75em',
  },
};

export default theme;
