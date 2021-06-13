import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Container = styled.div`
  display: block;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  padding: 16px 0 0 0;
  transition: box-shadow 0.4s ease-in-out, border 0.4s ease-in-out;
  color: ${({ theme }) => theme.colors.text};

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 30px 0px;
    border: 1px solid transparent;
  }
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  display: block;
  margin: 0;
`;

const Image = styled.img`
  display: block;
`;

type Props = {
  title: string;
  description: string;
  image?: string;
  href: string;
};

const TeaserCard = ({ title, description, image, href }: Props) => (
  <Link href={href}>
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {image && <Image src={image} />}
    </Container>
  </Link>
);

export default TeaserCard;
