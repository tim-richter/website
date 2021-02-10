import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import { darken } from 'polished';
import { typography, TypographyProps } from 'styled-system';

type Props = {
  as?: any;
  children: any;
  className?: string;
  href: string;
} & TypographyProps;

const StyledLink = ({ as, children, className, href }: Props) => (
  <Link href={href} as={as} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  ${typography};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => darken(0.3, theme.colors.primary)};
  }

  &:focus {
    color: ${({ theme }) => darken(0.3, theme.colors.primary)};
    outline: none;
    border: 0;
  }
`;
