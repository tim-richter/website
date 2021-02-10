import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../styledComponent';
import LegalNotice from '../../pages/legal-notice';

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
