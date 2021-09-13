import React from 'react';
import PropTypes from 'prop-types';
import { getSession } from 'next-auth/client';
import { Container } from 'react-bootstrap';
import LobbyContainer from '../../containers/Lobby/Container';
import Navbar from '../../components/Navbar';
import Avatar from '../../components/Avatar';

function Profile({ user }) {
  const { response } = user;
  const { email, username, description, avatar, age, favorites, location } = response;
  const {
    fact,
    color,
    movie,
    alcohol,
    socialise,
    destination,
    vacation_type: vacationType,
  } = favorites;
  const { lat, lon, country, city, country_code: countryCode } = location;
  return (
    <LobbyContainer sideBar={<div>Hello World</div>}>
      <Container className="p-3">
        <Navbar profileImg={user?.response?.avatar} />
        <div>Email {email}</div>
        <div>Username @{username}</div>
        <div>Description {description}</div>
        <div>Email {email}</div>
        <div>
          Avatar <Avatar imageSrc={avatar} />
        </div>
        <div>Age {age}</div>
        <div>Fact {fact}</div>
        <div>Color {color}</div>
        <div>movie {movie}</div>
        <div>alcohol {alcohol}</div>
        <div>socialise {socialise}</div>
        <div>destination {destination}</div>
        <div>vacationType {vacationType}</div>
        <div>lat {lat}</div>
        <div>lon {lon}</div>
        <div>country {country}</div>
        <div>city {city}</div>
        <div>countryCode {countryCode}</div>
      </Container>
    </LobbyContainer>
  );
}

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: '/',
        statusCode: 302,
      },
    };
  }

  const obj = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${session?.user?.auth}`,
    },
  };
  const user = await fetch(`https://bk-mayn.herokuapp.com/api/users/${session?.user?.sub}`, obj)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));

  return {
    props: { user }, // will be passed to the page component as props
  };
}
