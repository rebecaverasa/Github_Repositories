import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories($query: String!) {
    search(query: $query, type: REPOSITORY, first: 20) {
      nodes {
        ... on Repository {
          name
          owner {
            login
          }
          description
        }
      }
    }
  }
`;