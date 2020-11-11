import React from 'react';
import { Linkedin, GitHub, Mail, ArrowLeftCircle } from 'react-feather';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from '../components/Link';
import SocialLink from '../components/SocialLink';

const Container = styled.header<{ isHome: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isHome ? 'flex-end' : 'space-between')};
  align-content: center;
  padding: 16px;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 8px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;

    .icon {
      width: 22px;
      margin-right: 4px;
    }
  }
`;

const SocialIcon = styled(SocialLink)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 24px;
  }
`;

const Header = () => {
  const router = useRouter();
  const isHome = router.route === '/';

  return (
    <Container isHome={isHome}>
      {!isHome && (
        <StyledLink href="/">
          <ArrowLeftCircle className="icon" /> Go back
        </StyledLink>
      )}

      <SocialContainer>
        <SocialIcon label="linkedin" to="https://www.linkedin.com/in/tim-richter-developer/">
          <Linkedin width="100%" height="100%" />
        </SocialIcon>
        <SocialIcon label="github" to="https://github.com/tim-richter">
          <GitHub width="100%" height="100%" />
        </SocialIcon>
        <SocialIcon label="e-mail" to="mailto:tim@timrichter.dev">
          <Mail width="100%" height="100%" />
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
};

export default Header;
