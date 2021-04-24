import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

// FIX ⚠️ inMemoryCache({ addTypename: false }): Fixes issue with unwanted "__typename" field from queries. Brings performace issue.
// https://stackoverflow.com/questions/47211778/cleaning-unwanted-fields-from-graphql-responses/51380645#51380645

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  link: from([httpLink]),
});

export const ApolloGQLProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
