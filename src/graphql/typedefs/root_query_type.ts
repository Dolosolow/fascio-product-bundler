import gql from 'graphql-tag';

export const RootQueryType = gql`
  type Query {
    hello: String!
  }
`;
