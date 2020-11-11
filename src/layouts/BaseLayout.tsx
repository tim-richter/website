import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  height: 100vh;
  text-align: center;
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
      <Main>{children}</Main>
    </>
  );
};

export default BaseLayout;
