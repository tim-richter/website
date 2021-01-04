import { gql } from '@apollo/client';

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

export const SINGLE_ARTICLE = gql`
  query SingleArticle($slug: String!) {
    articles(where: { slug: $slug }) {
      title
      content
      description
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
