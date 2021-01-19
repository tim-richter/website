import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import Card from './Card';

describe('COMPONENT Card', () => {
  it('renders without crashing', () => {
    render(
      <StyledComponent>
        <Card>Test Content</Card>
      </StyledComponent>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
