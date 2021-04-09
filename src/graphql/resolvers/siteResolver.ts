import { IResolvers } from 'graphql-tools';
import { QueryProductsByKeywordArgs, QueryProductByIdArgs } from 'src/types/schema';
import axios from '../../utils/apiConfig';

export const siteResolver: IResolvers = {
  Query: {
    productsByKeyword: async (_, { keyword }: QueryProductsByKeywordArgs) => {
      try {
        const response = await axios.get(`/catalog/products?keyword=${keyword}&limit=7`);
        const products = response.data.data;

        return products;
      } catch (err) {
        console.log(err);
      }
    },
    productById: async (_, { id }: QueryProductByIdArgs) => {
      try {
        const response = await axios.get(`/catalog/products/${id}`);
        const product = response.data.data;

        return product;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
