import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import Image from './Image';

describe('COMPONENT Image', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <Image src="/test-url" alt="test" width={160} height={160} />
      </StyledComponent>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
