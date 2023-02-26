/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/order */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-use-before-define */
import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers'],
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `AWSDate` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 Date](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) string. In other words, this scalar type accepts date strings of the form `YYYY-MM-DD`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-05-01**" and "**-9999-01-01**" are both valid dates.  This scalar type can also accept an optional [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators). For example, "**1970-01-01**", "**1970-01-01Z**", "**1970-01-01-07:00**" and "**1970-01-01+05:30**" are all valid dates. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
  AWSDate: string;
  AWSDateTime: string;
  /** The `AWSEmail` scalar type provided by AWS AppSync, represents an Email address string that complies with [RFC 822](https://www.ietf.org/rfc/rfc822.txt). For example, "**username@example.com**" is a valid Email address. */
  AWSEmail: string;
  AWSIPAddress: string;
  AWSJSON: string;
  AWSPhone: string;
  AWSTime: string;
  AWSTimestamp: string;
  AWSURL: string;
};

export type Mutation = {
  createUser?: Maybe<User>;
};

export type MutationCreateUserArgs = {
  birthday: Scalars['AWSDate'];
  email: Scalars['AWSEmail'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
  retrieveAllUsers?: Maybe<Array<Maybe<User>>>;
  retrieveUser?: Maybe<User>;
};

export type QueryRetrieveUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  birthday: Scalars['AWSDate'];
  email: Scalars['AWSEmail'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type RetrieveUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type RetrieveUserQuery = {
  retrieveUser?: {
    id: string;
    name: string;
    birthday: string;
    email: string;
    password: string;
  } | null;
};

export type RetrieveAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type RetrieveAllUsersQuery = {
  retrieveAllUsers?: Array<{
    id: string;
    name: string;
    birthday: string;
    email: string;
  } | null> | null;
};

export const RetrieveUserDocument = `
    query RetrieveUser($id: ID!) {
  retrieveUser(id: $id) {
    id
    name
    birthday
    email
    password
  }
}
    `;
export const useRetrieveUserQuery = <
  TData = RetrieveUserQuery,
  TError = unknown,
>(
  client: GraphQLClient,
  variables: RetrieveUserQueryVariables,
  options?: UseQueryOptions<RetrieveUserQuery, TError, TData>,
  headers?: RequestInit['headers'],
) =>
  useQuery<RetrieveUserQuery, TError, TData>(
    ['RetrieveUser', variables],
    fetcher<RetrieveUserQuery, RetrieveUserQueryVariables>(
      client,
      RetrieveUserDocument,
      variables,
      headers,
    ),
    options,
  );
export const RetrieveAllUsersDocument = `
    query RetrieveAllUsers {
  retrieveAllUsers {
    id
    name
    birthday
    email
  }
}
    `;
export const useRetrieveAllUsersQuery = <
  TData = RetrieveAllUsersQuery,
  TError = unknown,
>(
  client: GraphQLClient,
  variables?: RetrieveAllUsersQueryVariables,
  options?: UseQueryOptions<RetrieveAllUsersQuery, TError, TData>,
  headers?: RequestInit['headers'],
) =>
  useQuery<RetrieveAllUsersQuery, TError, TData>(
    variables === undefined
      ? ['RetrieveAllUsers']
      : ['RetrieveAllUsers', variables],
    fetcher<RetrieveAllUsersQuery, RetrieveAllUsersQueryVariables>(
      client,
      RetrieveAllUsersDocument,
      variables,
      headers,
    ),
    options,
  );
