import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import CustomSignup from '../components/Forms/Signup';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import styles from '../styles/pages/Signup.module.scss';

function SignUp(props) {
  return (
    <Container className="p-3">
      <Navbar />
      <div className="d-flex flex-column align-items-center">
        <Header classnames="font-size-32">Sign up for a one of a kind experience</Header>
        <p className="sub-font wt-300 grey font-size-20">
          Meet brand new people and exit your comfort zone!
        </p>
        <div className={styles.FormContainer}>
          <CustomSignup />
        </div>
      </div>
    </Container>
  );
}

SignUp.propTypes = {};

export default SignUp;
