import React from 'react';
import markdown from 'remark-parse';
import unified from 'unified';
import html from 'rehype-stringify';
import rehypePrism from '@mapbox/rehype-prism';
import remarkRehype from 'remark-rehype';
import BaseLayout from '../../layouts/BaseLayout';
import { addApolloState, initializeApollo } from '../../graphql/apolloClient';
import { SINGLE_ARTICLE } from '../../graphql/queries/articles';

const Post = ({ data: { content, image, title }}) => {
  return (
    <BaseLayout>
      <div dangerouslySetInnerHTML={{ __html: content }} />
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

  if (result.data.articles[0].content) {
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
      data: result.data,
    },
  });
}

export default Post;
