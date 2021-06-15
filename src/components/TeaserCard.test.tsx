import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import TeaserCard from './TeaserCard';

describe('COMPONENT TeaserCard', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <TeaserCard description="Test Description" href="/test-url" title="Test Title" />
      </StyledComponent>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
