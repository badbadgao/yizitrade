/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Product = {
  __typename?: 'Product';
  currentPrice: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  discountOff?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  originalPrice: Scalars['Float']['output'];
  priceUnit: Scalars['String']['output'];
  qualityInStock: Scalars['Int']['output'];
  soldQty: Scalars['Int']['output'];
  special?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  products?: Maybe<Array<Product>>;
};

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, name: string, description: string, currentPrice: number, originalPrice: number, priceUnit: string, soldQty: number, special?: boolean | null, discountOff?: number | null, qualityInStock: number }> | null };


export const GetAllProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"currentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"originalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"priceUnit"}},{"kind":"Field","name":{"kind":"Name","value":"soldQty"}},{"kind":"Field","name":{"kind":"Name","value":"special"}},{"kind":"Field","name":{"kind":"Name","value":"discountOff"}},{"kind":"Field","name":{"kind":"Name","value":"qualityInStock"}}]}}]}}]} as unknown as DocumentNode<GetAllProductsQuery, GetAllProductsQueryVariables>;