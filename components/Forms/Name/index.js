import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Row, Spinner, Col } from 'react-bootstrap';
import { useSession } from 'next-auth/client';
import Input from '../../Input';
import InputButton from '../../Input/Button';
import Label from '../../Label';
import apiPost from '../../../services/apiPost';

function NameForm(props) {
  const [session] = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (d) => handleForm(d);
  const handleForm = async (d) => {
    setIsLoading(true);
    const { first_name, last_name } = d;
    const body = {
      id: session?.user?.sub,
      first_name,
      last_name
    };
    const headers = {
      Authorization: `Bearer ${session?.user?.auth}`,
    };
    const res = await apiPost('/update_user_name', body, headers);
    if (res?.data.status === 1) {
      router.push({
        pathname: '/signup',
        query: { step: '3' },
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
            <Row>
              <Col>
                <Label classnames="mx-3">What is your first name?</Label>
                <Input
                  type="text"
                  classnames="m-3"
                  placeholder="Danny"
                  register={register}
                  namespace="first_name"
                />
              </Col>
              <Col>
                <Label classnames="mx-3">What is your last name?</Label>
                <Input
                  type="text"
                  classnames="m-3"
                  placeholder="DeVito"
                  register={register}
                  namespace="last_name"
                />
              </Col>
            </Row>
            <InputButton classnames="mx-3 my-1" type="submit" value="Next Question" />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

NameForm.propTypes = {};

export default NameForm;
