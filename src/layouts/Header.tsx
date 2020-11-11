import React from 'react';
import { Linkedin, GitHub, Mail } from 'react-feather';
import styled from 'styled-components';
import SocialLink from '../components/SocialLink';

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Header = () => {
  return (
    <Container>
      <SocialLink label="linkedin" to="https://www.linkedin.com/in/tim-richter-developer/">
        <Linkedin width={30} height={30} />
      </SocialLink>
      <SocialLink label="github" to="https://github.com/tim-richter">
        <GitHub width={30} height={30} />
      </SocialLink>
      <SocialLink label="e-mail" to="mailto:tim@timrichter.dev">
        <Mail width={30} height={30} />
      </SocialLink>
    </Container>
  );
};

export default Header;
