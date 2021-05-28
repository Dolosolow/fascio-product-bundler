import { IResolvers } from "graphql-tools";
import { QueryProductsByKeywordArgs, QueryProductByIdArgs } from "src/types/schema";
import axios from "../../utils/apiConfig";

export const siteResolver: IResolvers = {
  Query: {
    productsByKeyword: async (_, { keyword }: QueryProductsByKeywordArgs) => {
      const apiUrl = `/catalog/products?keyword=${keyword}&include=primary_image&limit=7`;
      try {
        const response = await axios.get(apiUrl);
        return response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
    productById: async (_, { id }: QueryProductByIdArgs) => {
      try {
        const response = await axios.get(`/catalog/products/${id}`);
        return response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
