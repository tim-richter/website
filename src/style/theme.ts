import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#FF5470',
    secondary: '#FDE24F',
    text: '#363636',
  },
  transitions: {
    base(target = 'all') {
      return `${target} 0.3s ease-in-out`;
    },
  },
};

export default theme;
