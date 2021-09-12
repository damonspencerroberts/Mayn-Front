import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Spinner } from 'react-bootstrap';
import { useSession } from 'next-auth/client';
import Label from '../../Label';
import Button from '../../Button';
import apiPost from '../../../services/apiPost';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

function LocationForm(props) {
  const [location, setLocation] = useState({});
  const onPlaceSelect = (value) => {
    const { properties } = value;
    const { country, city, country_code, lat, lon } = properties;
    const body = { country, city, country_code, lat, lon };
    setLocation(body);
  };

  const [session] = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleForm = async (d) => {
    setIsLoading(true);
    const body = {
      id: session?.user?.sub,
      ...location,
    };
    const headers = {
      Authorization: `Bearer ${session?.user?.auth}`,
    };
    console.log(body);
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
          <Label classnames="mx-3">Where are you located?</Label>
          <div className="m-3">
            <GeoapifyContext apiKey="42f93daa6b8541d08bf679dbba3aeef4">
              <GeoapifyGeocoderAutocomplete
                placeholder="Paris, France"
                type="city"
                lang="en"
                limit={5}
                placeSelect={onPlaceSelect}
              />
            </GeoapifyContext>
          </div>
          <Button classnames="mx-3 my-1" onClick={handleForm}>
            Next Question
          </Button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

LocationForm.propTypes = {};

export default LocationForm;
