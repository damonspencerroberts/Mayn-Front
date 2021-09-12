import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import PropTypes from 'prop-types';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Label from '../../Label';
import Input from '../../Input';
import InputButton from '../../Input/Button';
import TextArea from '../../Input/TextArea';
import apiPost from '../../../services/apiPost';

function Favorites(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [session] = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onSubmit = (d) => handleForm(d);
  const handleForm = async (d) => {
    const { alcohol, color, destination, fact, movie, socialising, vacationType } = d;
    setIsLoading(true);
    const body = {
      id: session?.user?.sub,
      alcohol,
      color,
      destination,
      fact,
      movie,
      socialise: socialising,
      vacation_type: vacationType,
    };
    const headers = {
      Authorization: `Bearer ${session?.user?.auth}`,
    };
    const res = await apiPost('/update_user_favorites', body, headers);
    if (res?.data.status === 1) {
      router.push({
        pathname: '/signup',
        query: { step: '5' },
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
            <Container fluid>
              <Row>
                <Col md className="p-2 d-flex flex-column">
                  <Label classnames="mx-3">Your favorite color?</Label>
                  <Input
                    type="text"
                    classnames="m-3"
                    placeholder="Blue"
                    register={register}
                    namespace="color"
                  />
                </Col>
                <Col md className="p-2 d-flex flex-column">
                  <Label classnames="mx-3">Your favorite destination?</Label>
                  <Input
                    type="text"
                    classnames="m-3"
                    placeholder="New York City"
                    register={register}
                    namespace="destination"
                  />
                </Col>
              </Row>
              <Row>
                <Col md className="p-2 d-flex flex-column">
                  <Label classnames="mx-3">Your go to for socialising?</Label>
                  <Input
                    type="text"
                    classnames="m-3"
                    placeholder="Grabbing a drink"
                    register={register}
                    namespace="socialising"
                  />
                </Col>
                <Col md className="p-2 d-flex flex-column">
                  <Label classnames="mx-3">Your favorite type of vacation?</Label>
                  <Input
                    type="text"
                    classnames="m-3"
                    placeholder="Laying on a beach"
                    register={register}
                    namespace="vacationType"
                  />
                </Col>
              </Row>
              <Row>
                <Col md className="p-2 d-flex flex-column">
                  <Label classnames="mx-3">Your favorite movie?</Label>
                  <Input
                    type="text"
                    classnames="m-3"
                    placeholder="Harry Potter"
                    register={register}
                    namespace="movie"
                  />
                </Col>
                <Col md className="p-2 d-flex flex-column">
                  <Label classnames="mx-3">Your go to drink?</Label>
                  <Input
                    type="text"
                    classnames="m-3"
                    placeholder="Beer"
                    register={register}
                    namespace="alcohol"
                  />
                </Col>
              </Row>
              <Row>
                <Col md className="p-2 d-flex flex-column">
                  <Label classnames="mx-3">Your favorite fact about the world?</Label>
                  <TextArea
                    type="text"
                    classnames="m-3"
                    placeholder="Some cats are actually allergic to humans"
                    register={register}
                    namespace="fact"
                  />
                </Col>
              </Row>
            </Container>
            <InputButton classnames="mx-3 my-1" type="submit" value="Next Question" />
          </form>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

Favorites.propTypes = {};

export default Favorites;
