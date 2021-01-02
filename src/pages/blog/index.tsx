import React from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import { initializeApollo, addApolloState } from '../../graphql/apolloClient';
import { ALL_ARTICLES } from '../../graphql/queries/articles';

const Blog = (props) => {
  console.log(props);

  return <BaseLayout>Blog</BaseLayout>;
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
