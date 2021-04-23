import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bundle = {
  __typename?: 'Bundle';
  id: Scalars['ID'];
  store: Store;
  status: Scalars['String'];
  visits: Scalars['Int'];
  layout: LayoutTemplate;
  content: BundleContent;
  date_created: Scalars['String'];
  date_updated: Scalars['String'];
};

export type BundleContent = {
  __typename?: 'BundleContent';
  sections: Array<Section>;
};

export type BundleContentInput = {
  sections: Array<SectionInput>;
};

export type BundleInput = {
  storeId: Scalars['String'];
  layout: LayoutTemplateInput;
  content: BundleContentInput;
};

export type CreationResponse = {
  __typename?: 'CreationResponse';
  errors?: Maybe<Array<Error>>;
  success: Scalars['Boolean'];
};

export type Error = {
  __typename?: 'Error';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LayoutTemplate = {
  __typename?: 'LayoutTemplate';
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
  __typename?: 'Mutation';
  addNewBundle: CreationResponse;
};

export type MutationAddNewBundleArgs = {
  newBundle: BundleInput;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  calculated_price?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  sale_price?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  primary_image?: Maybe<ProductImage>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  id?: Maybe<Scalars['ID']>;
  product_id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  url_thumbnail?: Maybe<Scalars['String']>;
  url_standard?: Maybe<Scalars['String']>;
};

export type ProductImageInput = {
  id?: Maybe<Scalars['ID']>;
  product_id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  url_thumbnail?: Maybe<Scalars['String']>;
  url_standard?: Maybe<Scalars['String']>;
};

export type ProductInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  calculated_price?: Maybe<Scalars['String']>;
  cost_price?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  sale_price?: Maybe<Scalars['String']>;
  availability?: Maybe<Scalars['String']>;
  primary_image?: Maybe<ProductImageInput>;
};

export type Query = {
  __typename?: 'Query';
  productsByKeyword?: Maybe<Array<Product>>;
  productById?: Maybe<Product>;
  getBundles?: Maybe<Array<Bundle>>;
  getBundle?: Maybe<Bundle>;
  hello: Scalars['String'];
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
  __typename?: 'Section';
  id: Scalars['ID'];
  section_name: Scalars['String'];
  limit: Scalars['Int'];
  required: Scalars['Boolean'];
  specialNotes: Array<Maybe<Scalars['String']>>;
  products: Array<Product>;
};

export type SectionInput = {
  section_name: Scalars['String'];
  limit: Scalars['Int'];
  required: Scalars['Boolean'];
  specialNotes: Array<Maybe<Scalars['String']>>;
  products: Array<ProductInput>;
};

export type Store = {
  __typename?: 'Store';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  created_at: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Bundle: ResolverTypeWrapper<Bundle>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  BundleContent: ResolverTypeWrapper<BundleContent>;
  BundleContentInput: BundleContentInput;
  BundleInput: BundleInput;
  CreationResponse: ResolverTypeWrapper<CreationResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Error: ResolverTypeWrapper<Error>;
  LayoutTemplate: ResolverTypeWrapper<LayoutTemplate>;
  LayoutTemplateInput: LayoutTemplateInput;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductImage: ResolverTypeWrapper<ProductImage>;
  ProductImageInput: ProductImageInput;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Section: ResolverTypeWrapper<Section>;
  SectionInput: SectionInput;
  Store: ResolverTypeWrapper<Store>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Bundle: Bundle;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  BundleContent: BundleContent;
  BundleContentInput: BundleContentInput;
  BundleInput: BundleInput;
  CreationResponse: CreationResponse;
  Boolean: Scalars['Boolean'];
  Error: Error;
  LayoutTemplate: LayoutTemplate;
  LayoutTemplateInput: LayoutTemplateInput;
  Mutation: {};
  Product: Product;
  ProductImage: ProductImage;
  ProductImageInput: ProductImageInput;
  ProductInput: ProductInput;
  Query: {};
  Section: Section;
  SectionInput: SectionInput;
  Store: Store;
};

export type BundleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  visits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  layout?: Resolver<ResolversTypes['LayoutTemplate'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['BundleContent'], ParentType, ContextType>;
  date_created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  date_updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleContentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BundleContent'] = ResolversParentTypes['BundleContent']
> = {
  sections?: Resolver<Array<ResolversTypes['Section']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreationResponse'] = ResolversParentTypes['CreationResponse']
> = {
  errors?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  field?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LayoutTemplateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LayoutTemplate'] = ResolversParentTypes['LayoutTemplate']
> = {
  layout_bannerImg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  layout_bgColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  layout_template?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  steps_template?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  steps_alternateBgColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  steps_bgColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  steps_borderColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  steps_fontColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addNewBundle?: Resolver<
    ResolversTypes['CreationResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationAddNewBundleArgs, 'newBundle'>
  >;
};

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  calculated_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cost_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sale_price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  availability?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primary_image?: Resolver<Maybe<ResolversTypes['ProductImage']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductImage'] = ResolversParentTypes['ProductImage']
> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  product_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_standard?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  productsByKeyword?: Resolver<
    Maybe<Array<ResolversTypes['Product']>>,
    ParentType,
    ContextType,
    RequireFields<QueryProductsByKeywordArgs, never>
  >;
  productById?: Resolver<
    Maybe<ResolversTypes['Product']>,
    ParentType,
    ContextType,
    RequireFields<QueryProductByIdArgs, 'id'>
  >;
  getBundles?: Resolver<Maybe<Array<ResolversTypes['Bundle']>>, ParentType, ContextType>;
  getBundle?: Resolver<
    Maybe<ResolversTypes['Bundle']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetBundleArgs, 'id'>
  >;
  hello?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type SectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Section'] = ResolversParentTypes['Section']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  section_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  specialNotes?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  products?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Bundle?: BundleResolvers<ContextType>;
  BundleContent?: BundleContentResolvers<ContextType>;
  CreationResponse?: CreationResponseResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  LayoutTemplate?: LayoutTemplateResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductImage?: ProductImageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Section?: SectionResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
