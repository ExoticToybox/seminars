import { createBrowserRouter } from 'react-router-dom';

import { Dashboard, path as dashboardPath } from '@/contents/dashboard';
import { SignIn, path as signInPath } from '@/contents/sign-in';

export const router = createBrowserRouter([
  {
    path: dashboardPath,
    element: <Dashboard />,
  },
  {
    path: signInPath,
    element: <SignIn />,
  },
]);
