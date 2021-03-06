import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '../../Input';
import { signIn } from 'next-auth/client';
import InputButton from '../../Input/Button';
import apiPost from '../../../services/apiPost';

function SignUp(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => handleLogin(d);
  const handleLogin = async (d) => {
    const { username, email, password } = d;
    setIsLoading(true);
    const body = {
      user: { username, email, password },
    };
    const headers = {
      'accept': '*/*',
      'Content-Type': 'application/json',
    };
    const userExists = await apiPost('/user_exists', body);
    if (userExists.data.status === 0 || userExists.data.status === 1) {
      setIsLoading(false);
      setIsLoginError(true);
      setLoginErrorMessage(userExists.data.message);
    } else {
      setIsLoginError(false);
      setLoginErrorMessage('');
      await apiPost('/signup', body);
      signIn('credentials', {
        email,
        password,
        callbackUrl: `${window.location.origin}/signup?step=2`,
      });
    }
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <div
          className="d-flex align-items-center justify-content-center p-3"
          style={{ minHeight: '317px' }}
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
            <Input
              classnames="m-3"
              placeholder="Username"
              register={register}
              namespace="username"
            />
            {isLoginError && <p className="mx-3 p-0 red-1 sub-font">*{loginErrorMessage}</p>}
            <InputButton classnames="mx-3 my-1" type="submit" value="Sign up today!" />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

SignUp.propTypes = {};

export default SignUp;
