import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Product = {
  __typename?: 'Product';
  currentPrice: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  discountOff?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  isInCart: Scalars['Boolean']['output'];
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

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProductsQuery = {
  __typename?: 'Query';
  products?: Array<{
    __typename?: 'Product';
    id: string;
    name: string;
    description: string;
    currentPrice: number;
    originalPrice: number;
    priceUnit: string;
    soldQty: number;
    special?: boolean | null;
    discountOff?: number | null;
    qualityInStock: number;
    isInCart: boolean;
  }> | null;
};

export const GetAllProductsDocument = gql`
  query GetAllProducts {
    products {
      id
      name
      description
      currentPrice
      originalPrice
      priceUnit
      soldQty
      special
      discountOff
      qualityInStock
      isInCart @client
    }
  }
`;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
}
export function useGetAllProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
}
export function useGetAllProductsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
}
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsSuspenseQueryHookResult = ReturnType<typeof useGetAllProductsSuspenseQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
