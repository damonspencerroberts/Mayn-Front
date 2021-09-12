import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import apiPost from '../../../services/apiPost';
import PropTypes from 'prop-types';
import { signIn } from 'next-auth/client';
import axios from 'axios';
import cx from 'classnames';
import Input from '../../Input';
import InputButton from '../../Input/Button';
import Button from '../../Button';
import { Spinner } from 'react-bootstrap';

function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const { register, handleSubmit } = useForm();
  const handleLogin = async (d) => {
    setIsLoading(true);
    const { email, password } = d;
    const body = {
      user: {
        password: password,
        email: email,
      },
    };
    const user = await apiPost('/user_sessions', body);

    if (user.data.status === 1) {
      setIsLoginError(false);
      setLoginErrorMessage('');
      signIn('credentials', {
        email,
        password,
        callbackUrl: `${window.location.origin}/profile`,
      });
    } else {
      setIsLoading(false);
      setIsLoginError(true);
      setLoginErrorMessage(user.data.message);
    }
  };

  const onSubmit = (d) => handleLogin(d);
  return (
    <React.Fragment>
      {isLoading ? (
        <div
          className="d-flex align-items-center justify-content-center p-3"
          style={{ minHeight: '264px' }}
        >
          <Spinner animation="grow" size="lg" />
        </div>
      ) : (
        <React.Fragment>
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
            {isLoginError && <p className="mx-3 p-0 red-1 sub-font">*{loginErrorMessage}</p>}
            <InputButton classnames="mx-3 my-1" type="submit" value="Login" />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Login.propTypes = {};

export default Login;
