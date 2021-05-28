import gql from 'graphql-tag';

export const RootQueryType = gql`
  type Error {
    field: String!
    message: String!
  }

  type CreationResponse {
    errors: [Error!]
    success: Boolean!
  }

  type Query {
    root: String!
  }
`;
