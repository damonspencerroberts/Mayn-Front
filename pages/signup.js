import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import MainSignUpContainer from '../containers/Signup/Main';
import CustomSignup from '../components/Forms/Signup';
import AgeForm from '../components/Forms/Age';
import { useSession } from 'next-auth/client';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import styles from '../styles/pages/Signup.module.scss';
import Step from '../components/Step';

function SignUp(props) {
  const [session, loading] = useSession();
  const router = useRouter();
  const { query } = router;
  const { step } = query;

  console.log(session);

  return (
    <Container className="p-3">
      <Navbar />
      {step === '1' && (
        <MainSignUpContainer
          header="Sign up for a one of a kind experience"
          paragraph="Meet brand new people and exit your comfort zone."
        >
          <CustomSignup />
        </MainSignUpContainer>
      )}
      {step === '2' && (
        <React.Fragment>
          <p className="main-font green-1 font-size-24 wt-600 d-flex align-items-center justify-content-center">
            You have successfully signed up! Welcome @{session?.user?.username}
          </p>
          <div className="flex-center m-3">
            <Step>Step 2/5</Step>
          </div>
          <MainSignUpContainer
            header="We would love some more information on you to complete your profile"
            paragraph="Feel free to skip the question however a more complete profile leads to a better experience."
          >
            <AgeForm userId={session?.user?.sub} />
          </MainSignUpContainer>
        </React.Fragment>
      )}
    </Container>
  );
}

SignUp.propTypes = {};

export default SignUp;
