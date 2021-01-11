import React from 'react';
import markdown from 'remark-parse';
import unified from 'unified';
import html from 'rehype-stringify';
import rehypePrism from '@mapbox/rehype-prism';
import remarkRehype from 'remark-rehype';
import dayjs from 'dayjs';
import { Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { transparentize } from 'polished';
import ErrorPage from 'next/error';
import BaseLayout from '../../layouts/BaseLayout';
import { addApolloState, initializeApollo } from '../../graphql/apolloClient';
import { SINGLE_ARTICLE } from '../../graphql/queries/articles';
import Image from '../../components/Image';
import {buildImageLinkUrl} from "../../util/api";

const HeaderTextContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-right: 60px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: 0.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.7rem;
  font-weight: 900;
  line-height: 1.2;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.small`
  font-size: 1rem;
  line-height: 1.4;
`;

const Date = styled.time`
  font-size: 0.8rem;
  margin-top: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => transparentize(0.3, theme.colors.text)};
`;

const Content = styled.div`
  text-align: left;
  max-width: 50em;
  width: 100%;
`;

const StyledRow = styled(Row)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

interface Props {
  data: {
    content: string;
    image: {
      url: string;
    };
    title: string;
    description: string;
    publishedAt: Date;
    error: boolean;
  };
}

const Post: React.FC<Props> = ({ data: { content, image, title, description, publishedAt, error } }) => {
  if (error) return <ErrorPage statusCode={404} />;

  return (
    <BaseLayout seo={{ title, description, image: buildImageLinkUrl(image.url) }}>
      <StyledRow>
        <HeaderTextContainer xs={12} md={5}>
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
          <Date>{dayjs(publishedAt).format('YYYY MMMM DD')}</Date>
        </HeaderTextContainer>
        <Col xs={12} sm={8} md={7}>
          <Image src={image.url} alt="Bla" isFromApi />
        </Col>
      </StyledRow>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </BaseLayout>
  );
};

export async function getServerSideProps({ params }) {
  const apolloClient = initializeApollo();

  const result = await apolloClient.query({
    query: SINGLE_ARTICLE,
    variables: {
      slug: params.slug,
    },
  });

  if (result?.data?.articles[0]?.content) {
    const parsedContent = await unified()
      .use(markdown)
      .use(remarkRehype)
      .use(rehypePrism)
      .use(html)
      .process(result.data.articles[0].content);

    return addApolloState(apolloClient, {
      props: {
        data: {
          ...result.data.articles[0],
          content: parsedContent.contents,
        },
      },
    });
  }

  return addApolloState(apolloClient, {
    props: {
      data: { error: true },
    },
  });
}

export default Post;
