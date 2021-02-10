import React from 'react';
import styled from 'styled-components';
import Link from '../components/Link';

const Container = styled.footer`
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <Link href="/legal-notice" fontSize={1}>
        Legal Notice
      </Link>
    </Container>
  );
};

export default Footer;
