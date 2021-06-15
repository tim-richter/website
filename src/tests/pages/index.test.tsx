import { render, screen } from '@testing-library/react';
import React from 'react';
import StyledComponent from '../styledComponent';
import Blog from '../../pages/blog';

describe('PAGE blog/', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <Blog data={{ articles: [] }} />
      </StyledComponent>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render all articles', () => {
    render(
      <StyledComponent>
        <Blog
          data={{
            articles: [
              {
                title: 'Test Title',
                image: { url: '/test-url', alternativeText: 'Test Alt', caption: 'Test Caption' },
                slug: 'Test Slug',
              },
            ],
          }}
        />
      </StyledComponent>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
