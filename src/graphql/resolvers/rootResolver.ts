import { IResolvers } from 'graphql-tools';

export const rootResolver: IResolvers = {
  Query: {
    root: () => 'Hello Groupie!',
  },
};
