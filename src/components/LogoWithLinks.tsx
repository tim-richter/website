import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import Logo from './Logo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  align-self: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 16px;
  letter-spacing: 4px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const StyledLogo = styled(Logo)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
  }
`;

const LogoWithLinks = () => (
  <Container>
    <StyledLink href="/about">About</StyledLink>
    <StyledLogo />
    <StyledLink href="/blog">Blog</StyledLink>
  </Container>
);

export default LogoWithLinks;
