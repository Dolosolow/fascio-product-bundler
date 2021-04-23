import gql from 'graphql-tag';

export const GrupType = gql`
  type Section {
    id: ID!
    section: String!
    section_name: String!
    limit: Int!
    required: Boolean!
    specialNotes: [String!]
    products: [Product!]!
  }

  type Bundle {
    id: ID!
    store: Store!
    layout_bannerImg: String
    layout_bgColor: String!
    layout_template: String!
    steps_template: String!
    steps_alternateBgColor: String!
    steps_bgColor: String!
    steps_borderColor: String!
    steps_fontColor: String!
    sections: [Section!]!
    date_created: String!
    date_updated: String!
  }

  input BundleInput {
    storeId: String!
    layout_bannerImg: String
    layout_bgColor: String!
    layout_template: String!
    steps_template: String!
    steps_alternateBgColor: String!
    steps_bgColor: String!
    steps_borderColor: String!
    steps_fontColor: String!
    sections: [SectionInput!]!
    date_created: String!
    date_updated: String!
  }

  input SectionInput {
    section: String!
    section_name: String!
    limit: Int!
    required: Boolean!
    specialNotes: [String!]
    products: [ProductInput!]
  }

  type Query {
    getBundles: [Bundle!]
    getBundle(id: ID!): Bundle
  }

  type Mutation {
    addNewBundle(newBundle: BundleInput!): CreationResponse!
  }
`;
