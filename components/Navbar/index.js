import React from 'react';
import PropTypes from 'prop-types';
import LargeLogo from '../Logo/Large';
import { Container } from 'react-bootstrap';

function Navbar(props) {
  return (
    <Container className="d-flex align-items-center">
      <LargeLogo />
    </Container>
  );
}

Navbar.propTypes = {};

export default Navbar;
