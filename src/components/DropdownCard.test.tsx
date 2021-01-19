import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import DropdownCard from './DropdownCard';

describe('COMPONENT DropdownCard', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <DropdownCard title="Test Title">Test Content</DropdownCard>
      </StyledComponent>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should show content when card was clicked', () => {
    render(
      <StyledComponent>
        <DropdownCard title="Test Title">Test Content</DropdownCard>
      </StyledComponent>
    );

    fireEvent(
      screen.getByText('Test Title'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
