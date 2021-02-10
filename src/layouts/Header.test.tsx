import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useRouter } from 'next/router';
import StyledComponent from '../tests/styledComponent';
import Header from './Header';

const router: any = useRouter;

describe('LAYOUT Header', () => {
  it('should render without crashing', () => {
    render(
      <StyledComponent>
        <Header />
      </StyledComponent>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should show back button when not on home page', () => {
    router.mockImplementationOnce(() => ({ route: '/test', back: jest.fn() }));

    render(
      <StyledComponent>
        <Header />
      </StyledComponent>
    );
    expect(screen.getByText('Go back')).toBeInTheDocument();
  });

  it('should call next routers back method when back button was pressed', () => {
    const backMock = jest.fn();
    router.mockImplementationOnce(() => ({ route: '/test', back: backMock }));

    render(
      <StyledComponent>
        <Header />
      </StyledComponent>
    );

    fireEvent(
      screen.getByText('Go back'),
      new MouseEvent('click', {
        bubbles: true,
      })
    );

    expect(backMock).toHaveBeenCalled();
  });
});
