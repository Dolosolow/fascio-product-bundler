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
      status
      visits
      layout {
        layout_template
        steps_template
      }
      date_created
    }
  }
`;
