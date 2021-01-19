import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import Image from './Image';

describe('COMPONENT Image', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <Image src="test" alt="test" />
      </StyledComponent>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
