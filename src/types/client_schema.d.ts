import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bundle = {
  id: Scalars['ID'];
  storeId: Scalars['String'];
  status: BundleStatus;
  visits: Scalars['Int'];
  bundleName: Scalars['String'];
  layout: LayoutTemplate;
  content: BundleContent;
  date_created: Scalars['String'];
  date_updated: Scalars['String'];
};

export type BundleContent = {
  sections: Array<Section>;
};

export type BundleContentInput = {
  sections: Array<SectionInput>;
};

export type BundleInput = {
  storeId: Scalars['String'];
  bundleName: Scalars['String'];
  layout: LayoutTemplateInput;
  content: BundleContentInput;
};

export enum BundleStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Removed = 'REMOVED',
  Expired = 'EXPIRED'
}

export type CreationResponse = {
  errors?: Maybe<Array<Error>>;
  success: Scalars['Boolean'];
};

export type Error = {
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LayoutTemplate = {
  layout_bannerImg?: Maybe<Scalars['String']>;
  layout_bgColor: Scalars['String'];
  layout_template: Scalars['String'];
  steps_template: Scalars['String'];
  steps_alternateBgColor: Scalars['String'];
  steps_bgColor: Scalars['String'];
  steps_borderColor: Scalars['String'];
  steps_fontColor: Scalars['String'];
};

export type LayoutTemplateInput = {
  layout_bannerImg?: Maybe<Scalars['String']>;
  layout_bgColor: Scalars['String'];
  layout_template: Scalars['String'];
  steps_template: Scalars['String'];
  steps_alternateBgColor: Scalars['String'];
  steps_bgColor: Scalars['String'];
  steps_borderColor: Scalars['String'];
  steps_fontColor: Scalars['String'];
};

export type Mutation = {
  addNewBundle: CreationResponse;
};


export type MutationAddNewBundleArgs = {
  newBundle: BundleInput;
};

export type Product = {
  id: Scalars['String'];
  name: Scalars['String'];
  sku: Scalars['String'];
  price: Scalars['String'];
  sale_price: Scalars['String'];
  primary_image: ProductImage;
};

export type ProductImage = {
  id: Scalars['ID'];
  description: Scalars['String'];
  url_thumbnail: Scalars['String'];
  url_standard: Scalars['String'];
};

export type ProductImageInput = {
  id: Scalars['ID'];
  description: Scalars['String'];
  url_thumbnail: Scalars['String'];
  url_standard: Scalars['String'];
};

export type ProductInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  sku: Scalars['String'];
  price: Scalars['String'];
  sale_price: Scalars['String'];
  primary_image: ProductImageInput;
};

export type Query = {
  productsByKeyword?: Maybe<Array<Product>>;
  productById?: Maybe<Product>;
  getBundles: Array<Bundle>;
  getBundle?: Maybe<Bundle>;
  root: Scalars['String'];
};


export type QueryProductsByKeywordArgs = {
  keyword?: Maybe<Scalars['String']>;
};


export type QueryProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetBundleArgs = {
  id: Scalars['ID'];
};

export type Section = {
  sectionName: Scalars['String'];
  limit: Scalars['Int'];
  required: Scalars['Boolean'];
  specialNotes?: Maybe<Array<Maybe<Scalars['String']>>>;
  products: Array<Product>;
};

export type SectionInput = {
  sectionName: Scalars['String'];
  limit: Scalars['Int'];
  required: Scalars['Boolean'];
  specialNotes?: Maybe<Array<Maybe<Scalars['String']>>>;
  products: Array<ProductInput>;
};

export type Store = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['String'];
  bundles?: Maybe<Array<Bundle>>;
};

export type StoreInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
};
