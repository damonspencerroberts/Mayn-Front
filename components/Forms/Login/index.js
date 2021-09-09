import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { signIn } from 'next-auth/client';

function Login(props) {
  const { register, handleSubmit } = useForm();
  const handleLogin = (d) => {
    const { email, password } = d;
    signIn('credentials', {
      email,
      password,
      // The page where you want to redirect to after a
      // successful login
    //   callbackUrl: `${window.location.origin}`,
    });
  };
  const onSubmit = (d) => handleLogin(d);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input {...register('email')} />
      <label>Password</label>
      <input {...register('password')} />
      <input type="submit" value="submit" />
    </form>
  );
}

Login.propTypes = {};

export default Login;
