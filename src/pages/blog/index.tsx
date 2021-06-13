import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { GetStaticProps } from 'next';
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

const Blog: React.FC<Props> = ({ data }) => (
  <BaseLayout seo={{ title: 'Blog', description: 'I also write blog posts' }}>
    <Title>Blog ✍️</Title>

    {data.articles && data.articles.length > 0 && (
      <Row center="xs">
        {data.articles.map((article) => (
          <Col xs={12} sm={6} md={4} key={article.slug}>
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

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const result = await apolloClient.query({
    query: ALL_ARTICLES,
  });

  const ONE_HOUR = 60 * 60;

  return addApolloState(apolloClient, {
    props: {
      data: result.data,
    },
    revalidate: ONE_HOUR,
  });
};

export default Blog;
