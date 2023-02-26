import { GraphQLClient } from 'graphql-request';
import { Navigate } from 'react-router-dom';

import { path as signInPath } from '@/contents/sign-in';
import { useRetrieveAllUsersQuery } from '@/graphql/generated';
import { isAuthenticated } from '@/hooks/authentication';

import { Presentation } from './presentation';

export const Dashboard = (): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const url: string = import.meta.env.VITE_GRAPHQL_API_URL;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const apiKey: string = import.meta.env.VITE_GRAPHQL_API_KEY;
  const users = useRetrieveAllUsersQuery(
    new GraphQLClient(url, { headers: { 'X-API-KEY': apiKey } }),
  );

  if (!isAuthenticated()) {
    return <Navigate replace to={signInPath} />;
  }
  return <Presentation users={users.data?.retrieveAllUsers || []} />;
};

export const path = '/';
