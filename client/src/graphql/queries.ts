import { gql } from "@apollo/client";

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

export const getBundle = gql`
  query getBundle($id: ID!) {
    getBundle(id: $id) {
      id
      bundleName
      layout {
        layout_bannerImg
        layout_bgColor
        layout_template
        steps_template
        steps_alternateBgColor
        steps_bgColor
        steps_borderColor
        steps_fontColor
      }
      content {
        sections {
          sectionName
          minSelect
          maxSelect
          required
          specialNotes
          products {
            id
            name
            sku
            price
            primary_image {
              url_standard
              url_thumbnail
            }
          }
        }
      }
    }
  }
`;
