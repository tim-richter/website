import styled from 'styled-components';
import React from 'react';
import { Activity } from 'react-feather';
import BaseLayout from '../layouts/BaseLayout';

export default function Home() {
  return (
    <BaseLayout>
      <Title>My page</Title>
      <Activity />
    </BaseLayout>
  );
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;
