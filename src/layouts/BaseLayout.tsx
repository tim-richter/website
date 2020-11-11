import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default BaseLayout;
