import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 8px;
  display: flex;
  align-content: center;
  transition: color 0.3s ease-in-out;
  width: 30px;

  &:hover {
    color: ${({ theme }) => darken(0.3, theme.colors.primary)};
  }
`;

type Props = {
  children: React.ReactNode;
  to: string;
  label?: string;
  className?: string;
};

/**
 * Link component with target blank and social icon styling
 *
 * @param children should be a icon in most cases
 * @param to href attribute
 * @param label label if content has no text
 * @param className
 */
const SocialLink = ({ children, to, label, className }: Props) => {
  return (
    <Link href={to} className={className} target="_blank" rel="noreferrer nofollow" aria-label={label}>
      {children}
    </Link>
  );
};

export default SocialLink;
