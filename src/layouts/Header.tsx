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
`;

const StyledArrow = styled(ArrowLeftCircle)`
  margin-right: 8px;
`;

const Header = () => {
  const router = useRouter();
  const isHome = router.route === '/';

  return (
    <Container isHome={isHome}>
      {!isHome && (
        <StyledLink href="/">
          <StyledArrow /> Go back
        </StyledLink>
      )}

      <SocialContainer>
        <SocialLink label="linkedin" to="https://www.linkedin.com/in/tim-richter-developer/">
          <Linkedin width={30} height={30} />
        </SocialLink>
        <SocialLink label="github" to="https://github.com/tim-richter">
          <GitHub width={30} height={30} />
        </SocialLink>
        <SocialLink label="e-mail" to="mailto:tim@timrichter.dev">
          <Mail width={30} height={30} />
        </SocialLink>
      </SocialContainer>
    </Container>
  );
};

export default Header;
