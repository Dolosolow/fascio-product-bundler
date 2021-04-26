import gql from 'graphql-tag';

export const GrupType = gql`
  enum BundleStatus {
    ACTIVE
    INACTIVE
    REMOVED
    EXPIRED
  }

  type Bundle {
    id: ID!
    storeId: ID!
    status: BundleStatus!
    visits: Int!
    layout: LayoutTemplate!
    content: BundleContent!
    date_created: String!
    date_updated: String!
  }

  type BundleContent {
    sections: [Section!]!
  }

  type LayoutTemplate {
    layout_bannerImg: String
    layout_bgColor: String!
    layout_template: String!
    steps_template: String!
    steps_alternateBgColor: String!
    steps_bgColor: String!
    steps_borderColor: String!
    steps_fontColor: String!
  }

  type Section {
    section_name: String!
    limit: Int!
    required: Boolean!
    specialNotes: [String]
    products: [Product!]!
  }

  input BundleContentInput {
    sections: [SectionInput!]!
  }

  input LayoutTemplateInput {
    layout_bannerImg: String
    layout_bgColor: String!
    layout_template: String!
    steps_template: String!
    steps_alternateBgColor: String!
    steps_bgColor: String!
    steps_borderColor: String!
    steps_fontColor: String!
  }

  input BundleInput {
    storeId: ID!
    layout: LayoutTemplateInput!
    content: BundleContentInput!
  }

  input SectionInput {
    section_name: String!
    limit: Int!
    required: Boolean!
    specialNotes: [String]
    products: [ProductInput!]!
  }

  type Query {
    getBundles: [Bundle!]!
    getBundle(id: ID!): Bundle
  }

  type Mutation {
    addNewBundle(newBundle: BundleInput!): CreationResponse!
  }
`;
