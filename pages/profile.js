import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';

function Profile() {
  return (
    <Container className="p-3">
      <Navbar />
    </Container>
  );
}

Profile.propTypes = {};

export default Profile;
