import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/client';
import { Spinner } from 'react-bootstrap';
import Label from '../../Label';
import TextArea from '../../Input/TextArea';
import InputButton from '../../Input/Button';

function DescriptionForm(props) {
  const [session] = useSession();
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
            <Label classnames="mx-3">Who is @{session?.user?.username}?</Label>
            <TextArea
              type="textarea"
              classnames="m-3"
              placeholder="Write a short bio..."
              register={register}
              namespace="description"
            />
            <InputButton classnames="mx-3 my-1" type="submit" value="Next Question" />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

DescriptionForm.propTypes = {};

export default DescriptionForm;
