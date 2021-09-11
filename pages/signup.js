import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';

function SignUp(props) {
  return (
    <Container className="p-3">
      <Navbar />
    </Container>
  );
}

SignUp.propTypes = {};

export default SignUp;
