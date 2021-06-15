import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import SocialLink from './SocialLink';

describe('COMPONENT SocialLink', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <SocialLink to="/test-url">Test Content</SocialLink>
      </StyledComponent>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
