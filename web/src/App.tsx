import { QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Header } from '@/components/header';
import { router } from '@/components/routes/index.untestable';
import { queryClient } from '@/functions/query/react-query-client.untestable';

export const App = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <RouterProvider router={router} />
  </QueryClientProvider>
);
