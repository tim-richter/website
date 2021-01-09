// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
    };
    transitions: {
      base: Function;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    flexboxgrid: {
      breakpoints: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
      };
    };
  }
}
