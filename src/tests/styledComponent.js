import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from '../style/theme';

/**
 * Helper Component wrapping a component in a styled components theme provider
 * @param currentTheme - theme file containing theme styles
 * @param children - Your component that should be tested
 */
const StyledComponent = ({ currentTheme = theme, children }) => (
  <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
);

export default StyledComponent;
