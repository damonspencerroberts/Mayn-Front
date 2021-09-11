import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Input from '../../Input';
import InputButton from '../../Input/Button';

function SignUp(props) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => handleLogin(d);
  const handleLogin = (d) => {
    setIsLoading(true);
    console.log(d);
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
            <Input
              classnames="m-3"
              placeholder="Username"
              register={register}
              namespace="username"
            />
            <Input classnames="m-3" placeholder="Email" register={register} namespace="email" />
            <Input
              type="password"
              classnames="m-3"
              placeholder="Password"
              register={register}
              namespace="password"
            />
            <InputButton classnames="mx-3 my-1" type="submit" value="Sign up today!" />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

SignUp.propTypes = {};

export default SignUp;
