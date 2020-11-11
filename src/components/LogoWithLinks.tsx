import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import Logo from './Logo';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StyledLink = styled(Link)`
  align-self: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 16px;
  letter-spacing: 4px;
`;

const LogoWithLinks = () => {
  return (
    <Container>
      <StyledLink href="/about">About</StyledLink>
      <Logo />
      <StyledLink href="/work">Work</StyledLink>
    </Container>
  );
};

export default LogoWithLinks;
