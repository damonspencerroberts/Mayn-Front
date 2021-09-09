import React from 'react';
import PropTypes from 'prop-types';
import LargeLogo from '../Logo/Large';
import { Container } from 'react-bootstrap';
import Button from '../Button';

function Navbar(props) {
  return (
    <Container className="d-flex align-items-center justify-content-between py-5">
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-center">
          <LargeLogo className="mr-3" />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="dark main-font font-size-20 px-3">Features</div>
          <div className="dark main-font font-size-20 px-3">Why Mayn?</div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-end">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </Container>
  );
}

Navbar.propTypes = {};

export default Navbar;
