import React from 'react';
import styled from 'styled-components';
import { width } from 'styled-system';

type Props = {
  width?: number | null;
};

const StyledLogo = styled.img<Props>`
  ${width}
`;

const Logo = (props: Props) => <StyledLogo src="/images/logo.svg" alt="logo" {...props} />;

export default Logo;
