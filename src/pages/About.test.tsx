import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import About from './About';

describe('PAGE About', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <About />
      </StyledComponent>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
