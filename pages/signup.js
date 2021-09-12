import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import MainSignUpContainer from '../containers/Signup/Main';
import CustomSignup from '../components/Forms/Signup';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import styles from '../styles/pages/Signup.module.scss';

function SignUp(props) {
  const router = useRouter();
  const { query } = router;
  const { step } = query;

  return (
    <Container className="p-3">
      <Navbar />
      {step === '1' && (
        <MainSignUpContainer
          header="Sign up for a one of a kind experience"
          paragraph="Meet brand new people and exit your comfort zone!"
        >
          <CustomSignup />
        </MainSignUpContainer>
      )}
      {step === '2' && <p>Signed up!</p>}
    </Container>
  );
}

SignUp.propTypes = {};

export default SignUp;
