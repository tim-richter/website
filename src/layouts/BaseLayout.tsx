import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';
import SEO from '../components/SEO';

const Container = styled(Grid)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  height: calc(100vh - 80px);
  text-align: center;
  margin-top: 80px;
`;

const Main = styled.main`
  align-self: center;
  width: 100%;
  height: 100%;
`;

type Props = {
  children: React.ReactNode;
  seo?: {
    title?: string;
    description?: string;
  };
};

const BaseLayout = ({ children, seo }: Props) => {
  return (
    <>
      <SEO {...seo} />
      <Container>
        <Main>{children}</Main>
      </Container>
    </>
  );
};

export default BaseLayout;
