import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  text-align: center;
`;

const BaseLayout = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default BaseLayout;
