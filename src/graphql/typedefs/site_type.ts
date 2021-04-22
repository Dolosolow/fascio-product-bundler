import gql from 'graphql-tag';

export const SiteType = gql`
  type Product {
    id: ID
    name: String
    sku: String
    calculated_price: String
    cost_price: String
    price: String
    sale_price: String
    availability: String
    primary_image: ProductImage
  }

  type ProductImage {
    id: ID
    product_id: ID
    description: String
    url_thumbnail: String
    url_standard: String
  }

  type Query {
    productsByKeyword(keyword: String): [Product!]
    productById(id: ID!): Product
  }
`;
