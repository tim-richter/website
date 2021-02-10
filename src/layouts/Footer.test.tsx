import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import Footer from './Footer';

describe('LAYOUT Footer', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <Footer />
      </StyledComponent>
    );
    expect(screen.getByText('Legal Notice')).toBeInTheDocument();
  });
});
