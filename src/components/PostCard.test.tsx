import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../tests/styledComponent';
import PostCard from './PostCard';

describe('COMPONENT PostCard', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <PostCard imgAlt="Test Alt" link="Test Link" imgUrl="Test Url" title="Title" />
      </StyledComponent>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});
