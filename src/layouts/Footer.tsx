import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import Link from '../components/Link';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Copyright = styled.span`
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => transparentize(0.3, theme.colors.text)};
`;

const Footer = () => {
  return (
    <Container>
      <Link href="/legal-notice" fontSize={1}>
        Legal Notice
      </Link>
      <Copyright>© Copyright {new Date().getFullYear()}, Tim Richter</Copyright>
    </Container>
  );
};

export default Footer;
