import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Image from './Image';
import Link from './Link';

interface Props {
  title: string;
  imgUrl: string;
  imgAlt: string;
  link: string;
}

const StyledImg = styled(Image)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Content = styled.div`
  padding: 32px 24px;
  font-size: 1rem;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
`;

const PostCard: React.FC<Props> = ({ title, imgUrl, imgAlt, link }) => (
  <Link href={link}>
    <Card padding="0">
      <StyledImg src={imgUrl} alt={imgAlt} isFromApi width={1920} height={1464} />
      <Content>
        <Title>{title}</Title>
      </Content>
    </Card>
  </Link>
);

export default PostCard;
