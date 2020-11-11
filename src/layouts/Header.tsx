import React from 'react';
import { Linkedin, GitHub } from 'react-feather';
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
      <SocialLink to="https://www.linkedin.com/in/tim-richter-developer/">
        <Linkedin />
      </SocialLink>
      <SocialLink to="https://github.com/tim-richter">
        <GitHub />
      </SocialLink>
    </Container>
  );
};

export default Header;
