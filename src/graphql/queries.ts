import { gql } from '@apollo/client';

export const productsByKeyword = gql`
  query productsByKeyword($keyword: String!) {
    productsByKeyword(keyword: $keyword) {
      id
      sku
      name
      price
      sale_price
      primary_image {
        id
        description
        url_thumbnail
        url_standard
      }
    }
  }
`;

export const getAllBundles = gql`
  query getBundles {
    getBundles {
      id
      storeId
      status
      bundleName
      visits
      content {
        sections {
          products {
            id
          }
        }
      }
      date_created
      date_updated
    }
  }
`;
