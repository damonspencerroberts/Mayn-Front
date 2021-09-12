import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import { useSession } from 'next-auth/client';
import Input from '../../Input';
import InputButton from '../../Input/Button';
import Label from '../../Label';
import apiPost from '../../../services/apiPost';

function LocationForm(props) {
  const [session] = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (d) => handleForm(d);
  const handleForm = async (d) => {
    setIsLoading(true);
    const { location } = d;
    const body = {
      id: session?.user?.sub,
      location,
    };
    const headers = {
      Authorization: `Bearer ${session?.user?.auth}`,
    };
    const res = await apiPost('/update_user_location', body, headers);
    if (res?.data.status === 1) {
      router.push({
        pathname: '/signup',
        query: { step: '6' },
      });
    } else {
      alert('There was an error. We apologize for the inconvenience.');
      setIsLoading(false);
    }
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
              placeholder="Your location..."
              register={register}
              namespace="location"
            />
            <InputButton classnames="mx-3 my-1" type="submit" value="Next Question" />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

LocationForm.propTypes = {};

export default LocationForm;