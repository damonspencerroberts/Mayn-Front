import React from 'react';
import { getSession } from 'next-auth/client';
import PropTypes from 'prop-types';

function Profile({ session }) {
  console.log(session);
  return <div>This is a profile</div>;
}

Profile.propTypes = {};

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

  return {
    props: { session },
  };
}
