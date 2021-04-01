import { IResolvers } from 'graphql-tools';

export const rootResolver: IResolvers = {
  Query: {
    hello: () => 'Hello Groupie!',
  },
};
