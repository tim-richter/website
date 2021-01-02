import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const ALL_ARTICLES = gql`
  query AllArticles {
    articles {
      id
      title
      slug
      image {
        id
        url
        name
        alternativeText
        caption
        formats
      }
    }
  }
`;
