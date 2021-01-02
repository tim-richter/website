import {gql} from "@apollo/client";

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
`
