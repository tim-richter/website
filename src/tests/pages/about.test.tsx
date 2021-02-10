import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../styledComponent';
import About from '../../pages/about';

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
