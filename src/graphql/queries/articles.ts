import { gql } from '@apollo/client';

/* istanbul ignore file */

export const ALL_ARTICLES = gql`
  query AllArticles {
    articles(where: { status: "published" }) {
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
    articles(where: { slug: $slug, status: "published" }) {
      title
      content
      description
      publishedAt
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
