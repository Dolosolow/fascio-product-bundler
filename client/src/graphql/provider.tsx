import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
  credentials: "include",
});

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache({ addTypename: false }),
});

export const ApolloGQLProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
