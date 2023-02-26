import { GraphQLClient } from 'graphql-request';

import { useRetrieveUserQuery } from '@/graphql/generated';

const key = 'user';

export type SignInProps = {
  id: string;
  password: string;
};

export const useSignIn = ({ id, password }: SignInProps): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const url: string = import.meta.env.VITE_GRAPHQL_API_URL;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const apiKey: string = import.meta.env.VITE_GRAPHQL_API_KEY;
  const user = useRetrieveUserQuery(
    new GraphQLClient(url, { headers: { 'X-API-KEY': apiKey } }),
    { id },
  );

  if (password === user.data?.retrieveUser?.password) {
    localStorage.setItem(key, JSON.stringify(user.data?.retrieveUser));
    return true;
  }
  return false;
};

export const isAuthenticated = (): boolean => {
  const user = localStorage.getItem(key);
  return !!user;
};

export const signOut = (): void => localStorage.setItem(key, '');
