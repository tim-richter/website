import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Main = styled.main`
  margin-top: 60px;
  padding: 24px;
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
