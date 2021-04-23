import { IResolvers } from 'graphql-tools';
import { MutationAddNewBundleArgs, Bundle } from '../../types/schema';

const testBundles: Bundle[] = [];

export const grupResolver: IResolvers = {
  Query: {
    getBundles: async () => {
      console.log(testBundles);
      return null;
    },
    getBundle: async () => {
      return null;
    },
  },
  Mutation: {
    addNewBundle: async (_, { newBundle }: MutationAddNewBundleArgs) => {
      console.log(newBundle);
      return { errors: [], success: true };
    },
  },
};
