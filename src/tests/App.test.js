import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from './styledComponent';
import App from '../pages';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <StyledComponent>
        <App />
      </StyledComponent>
    );
    expect(screen.getByText('My page')).toBeInTheDocument();
  });
});
