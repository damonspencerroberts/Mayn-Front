import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { signIn } from 'next-auth/client';
import cx from 'classnames';
import Input from '../../Input';
import Button from '../../Button';
import styles from './Login.module.scss';

function Login(props) {
  const { register, handleSubmit } = useForm();
  const handleLogin = (d) => {
    console.log(d);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="d-flex flex-column justify-content-between p-3"
    >
      <Input classnames="m-3" placeholder="Email" register={register} namespace="email" />
      <Input
        type="password"
        classnames="m-3"
        placeholder="Password"
        register={register}
        namespace="password"
      />
      <input className={cx('m-3', styles.Button)} type="submit" value="Login" />
    </form>
  );
}

Login.propTypes = {};

export default Login;
