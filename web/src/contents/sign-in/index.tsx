import { Dispatch, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

import { SignInProps, signOut, useSignIn } from '@/hooks/authentication';

import { Presentation } from './presentation';

const singIn =
  (
    setData: Dispatch<SetStateAction<SignInProps>>,
  ): SubmitHandler<SignInProps> =>
  (data: SignInProps) =>
    setData(data);

export const SignIn = (): React.ReactElement => {
  signOut();
  const [data, setData] = useState({ id: '', password: '' });
  const { register, handleSubmit } = useForm<SignInProps>();

  return useSignIn(data) ? (
    <Navigate replace to="/" />
  ) : (
    <Presentation
      signIn={singIn(setData)}
      onSubmit={handleSubmit}
      register={register}
    />
  );
};

export const path = '/sign-in';
