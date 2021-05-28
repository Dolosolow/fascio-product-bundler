import { gql } from '@apollo/client';

export const addNewBundle = gql`
  mutation addNewBundle($newBundle: BundleInput!) {
    addNewBundle(newBundle: $newBundle) {
      errors {
        field
        message
      }
      success
    }
  }
`;
