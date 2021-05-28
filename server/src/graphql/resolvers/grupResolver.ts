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
        id: (testBundles.length + 1).toString(),
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
      console.log("-- Store Bundles Sections --");
      console.log(testBundles[0].content);
      console.log("====================================");

      return {
        errors: [],
        success: true,
      };
    },
  },
};
