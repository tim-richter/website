import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import App from '../pages';

describe('COMPONENT Card', () => {
  it('renders without crashing', () => {
    render(
      <StyledComponent>
        <App />
      </StyledComponent>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
