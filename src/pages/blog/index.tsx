import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import BaseLayout from '../../layouts/BaseLayout';
import { initializeApollo, addApolloState } from '../../graphql/apolloClient';
import { ALL_ARTICLES } from '../../graphql/queries/articles';
import PostCard from '../../components/PostCard';
import { buildPostLinkUrl } from '../../util/api';

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 64px;
`;

interface Props {
  data: {
    articles?: {
      slug: string;
      title: string;
      image: {
        url: string;
        alternativeText: string;
        caption: string;
      };
    }[];
  };
}

const Blog: React.FC<Props> = ({ data }) => {
  return (
    <BaseLayout>
      <Title>Blog ✍️</Title>

      {data.articles && data.articles.length > 0 && (
        <Row center="xs">
          {data.articles.map((article) => (
            <Col xs={12} md={4}>
              <PostCard
                title={article.title}
                imgUrl={article.image.url}
                imgAlt={article.image.alternativeText}
                link={buildPostLinkUrl(article.slug)}
              />
            </Col>
          ))}
        </Row>
      )}
    </BaseLayout>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  const result = await apolloClient.query({
    query: ALL_ARTICLES,
  });

  return addApolloState(apolloClient, {
    props: {
      data: result.data,
    },
  });
}

export default Blog;
