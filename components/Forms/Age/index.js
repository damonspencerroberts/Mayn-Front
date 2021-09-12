import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import Input from '../../Input';
import InputButton from '../../Input/Button';
import Label from '../../Label';

function AgeForm(props) {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (d) => handleForm(d);
  const handleForm = (d) => {
    console.log(d);
  };

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
            <Label classnames="mx-3">How old are you?</Label>
            <Input
              type="text"
              classnames="m-3"
              placeholder="23"
              register={register}
              namespace="age"
            />
            <InputButton classnames="mx-3 my-1" type="submit" value="Next Question" />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

AgeForm.propTypes = {};

export default AgeForm;
