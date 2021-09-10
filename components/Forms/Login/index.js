import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { signIn } from 'next-auth/client';
import Input from '../../Input';
import Button from '../../Button';

function Login(props) {
  const { register, handleSubmit } = useForm();
  const handleLogin = (d) => {
    const { email, password } = d;
    signIn('credentials', {
      email,
      password,
      // The page where you want to redirect to after a
      // successful login
      callbackUrl: `${window.location.origin}/profile`,
    });
  };
  const onSubmit = (d) => handleLogin(d);
  return (
    <form className="d-flex flex-column justify-content-between p-3">
      <Input classnames="m-3" placeholder="Email" {...register('email')} />
      <Input classnames="m-3" placeholder="Password" {...register('password')} />
      <Button classnames="m-3" onClick={handleSubmit(onSubmit)}>
        Login
      </Button>
    </form>
  );
}

Login.propTypes = {};

export default Login;
