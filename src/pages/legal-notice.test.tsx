import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import LegalNotice from './legal-notice';

describe('PAGE Legal Notice', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <LegalNotice />
      </StyledComponent>
    );
    expect(screen.getByText('Legal Notice')).toBeInTheDocument();
  });
});
