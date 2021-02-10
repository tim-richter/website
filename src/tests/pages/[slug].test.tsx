import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../styledComponent';
import Post from '../../pages/blog/[slug]';

describe('PAGE blog/[slug]', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <Post
          data={{
            content: 'Test Content',
            error: false,
            image: { url: 'Test Url' },
            title: 'Test Title',
            description: 'Test Description',
            publishedAt: new Date(),
          }}
        />
      </StyledComponent>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render the Error page when an error occured', () => {
    render(
      <StyledComponent>
        <Post
          data={{
            content: 'Test Content',
            error: true,
            image: { url: 'Test Url' },
            title: 'Test Title',
            description: 'Test Description',
            publishedAt: new Date(),
          }}
        />
      </StyledComponent>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
