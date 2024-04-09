import { gql } from "@apollo/client";

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
          stargazerCount
          url
          issues(last: 3) {
            edges {
              node {
                number
                title
              }
            }
          }
          pullRequests(last: 3) {
            edges {
              node {
                url
                title
                createdAt
                repository {
                  id
                }
                author {
                  login
                }
              }
            }
          }
          defaultBranchRef {
            target {
              ... on Commit {
                history(first: 5) {
                  edges {
                    node {
                      changedFiles
                      additions
                      deletions
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
