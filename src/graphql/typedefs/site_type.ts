import gql from 'graphql-tag';

export const SiteType = gql`
  type Store {
    id: ID!
    name: String!
    email: String!
    created_at: String!
    bundles: [Bundle!]
  }

  type Product {
    id: String!
    name: String!
    sku: String!
    price: String!
    sale_price: String!
    primary_image: ProductImage!
  }

  type ProductImage {
    id: ID!
    description: String!
    url_thumbnail: String!
    url_standard: String!
  }

  input StoreInput {
    id: ID!
    name: String!
    email: String!
  }

  input ProductInput {
    id: ID!
    name: String!
    sku: String!
    price: String!
    sale_price: String!
    primary_image: ProductImageInput!
  }

  input ProductImageInput {
    id: ID!
    description: String!
    url_thumbnail: String!
    url_standard: String!
  }

  type Query {
    productsByKeyword(keyword: String): [Product!]
    productById(id: ID!): Product
  }
`;
