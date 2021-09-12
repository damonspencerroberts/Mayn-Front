import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import MainSignUpContainer from '../containers/Signup/Main';
import CustomSignup from '../components/Forms/Signup';
import DescriptionForm from '../components/Forms/Description';
import AgeForm from '../components/Forms/Age';
import FavoritesForm from '../components/Forms/Favorites';
import LocationForm from '../components/Forms/Location';
import AvatarForm from '../components/Forms/Avatar';
import { useSession } from 'next-auth/client';
import Navbar from '../components/Navbar';
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
          <MainSignUpContainer
            header="We would love some more information on you to complete your profile"
            paragraph="Feel free to skip the question however a more complete profile leads to a better experience."
          >
            <div className="flex-center m-3">
              <Step>Question 2/6</Step>
            </div>
            <AgeForm />
          </MainSignUpContainer>
        </React.Fragment>
      )}
      {step === '3' && (
        <React.Fragment>
          <MainSignUpContainer
            header="We would love some more information on you to complete your profile"
            paragraph="Feel free to skip the question however a more complete profile leads to a better experience."
          >
            <div className="flex-center m-3">
              <Step>Question 3/6</Step>
            </div>
            <DescriptionForm />
          </MainSignUpContainer>
        </React.Fragment>
      )}
      {step === '4' && (
        <React.Fragment>
          <MainSignUpContainer
            header="We would love some more information on you to complete your profile"
            paragraph="Feel free to skip the question however a more complete profile leads to a better experience."
          >
            <div className="flex-center m-3">
              <Step>Question 4/6</Step>
            </div>
            <FavoritesForm />
          </MainSignUpContainer>
        </React.Fragment>
      )}
      {step === '5' && (
        <React.Fragment>
          <MainSignUpContainer
            header="We would love some more information on you to complete your profile"
            paragraph="Feel free to skip the question however a more complete profile leads to a better experience."
          >
            <div className="flex-center m-3">
              <Step>Question 5/6</Step>
            </div>
            <LocationForm />
          </MainSignUpContainer>
        </React.Fragment>
      )}
      {step === '6' && (
        <React.Fragment>
          <MainSignUpContainer
            header="We would love some more information on you to complete your profile"
            paragraph="Feel free to skip the question however a more complete profile leads to a better experience."
          >
            <div className="flex-center m-3">
              <Step>Question 6/6</Step>
            </div>
            <AvatarForm />
          </MainSignUpContainer>
        </React.Fragment>
      )}
    </Container>
  );
}

SignUp.propTypes = {};

export default SignUp;
