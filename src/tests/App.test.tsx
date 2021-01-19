import { render, screen } from '@testing-library/react';
import React from 'react';
import * as nextRouter from 'next/router';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import StyledComponent from './styledComponent';
import App from '../pages';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <RouterContext.Provider value={nextRouter as any}>
        <StyledComponent>
          <App />
        </StyledComponent>
      </RouterContext.Provider>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
