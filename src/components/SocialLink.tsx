import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 8px;
  display: flex;
  align-content: center;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => darken(0.3, theme.colors.primary)};
  }
`;

/**
 * Link component with target blank and social icon styling
 *
 * @param children should be a icon in most cases
 * @param to href attribute
 */
const SocialLink = ({ children, to }) => {
  return (
    <Link href={to} target="_blank" rel="noreferrer nofollow">
      {children}
    </Link>
  );
};

export default SocialLink;
