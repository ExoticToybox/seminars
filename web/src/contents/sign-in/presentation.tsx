import { LockClosedIcon } from '@heroicons/react/20/solid';
import { ReactElement, memo } from 'react';
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

import { SignInProps } from '@/hooks/authentication';

export type Props = {
  signIn: SubmitHandler<SignInProps>;
  onSubmit: UseFormHandleSubmit<SignInProps>;
  register: UseFormRegister<SignInProps>;
};
export const Presentation = memo(
  ({ signIn, onSubmit, register }: Props): ReactElement => (
    // cf. https://tailwindui.com/components/application-ui/forms/sign-in-forms#component-55b9c2097342175b8ddfccf8a30fb68f
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className="mt-8 space-y-6" onSubmit={onSubmit(signIn)}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="id">
                id
                <input
                  id="id"
                  type="text"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="id"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register('id', { required: true })}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password
                <input
                  id="password"
                  type="password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...register('password', { required: true })}
                />
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  ),
);
