import styled from 'styled-components'
import React from "react";
import { Activity } from "react-feather";


export default function Home() {
  return (
    <>
      <Title>My page</Title>
      <Activity />
    </>
  )
}

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
