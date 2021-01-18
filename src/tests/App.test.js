import { render, screen } from '@testing-library/react';
import React from 'react';
import * as nextRouter from 'next/router';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import StyledComponent from './styledComponent';
import App from '../pages';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <RouterContext.Provider value={nextRouter}>
        <StyledComponent>
          <App />
        </StyledComponent>
      </RouterContext.Provider>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
