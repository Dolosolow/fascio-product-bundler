import { Resolvers, Bundle } from "../../types/schema";

const testBundles: Bundle[] = [];

export const grupResolver: Resolvers<Bundle> = {
  Query: {
    getBundles: async () => {
      console.log(testBundles);
      return testBundles;
    },
    getBundle: async (_, { id }) => {
      const requestedBundle = testBundles.find((bundle) => bundle.id === id);
      return requestedBundle || null;
    },
  },
  Mutation: {
    addNewBundle: async (_, { newBundle }) => {
      const bundle: Bundle = {
        id: "0",
        visits: 0,
        status: "INACTIVE",
        ...newBundle,
        date_created: new Date().toString(),
        date_updated: new Date().toString(),
      };
      testBundles.push(bundle);
      console.log("====================================");
      console.log("-- Store Bundles --");
      console.log(testBundles);
      console.log("====================================");
      return {
        errors: [],
        success: true,
      };
    },
  },
};
