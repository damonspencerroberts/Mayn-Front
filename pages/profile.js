import React from 'react';
import PropTypes from 'prop-types';
import { useSession, signOut } from 'next-auth/client';

function Profile() {
  const [session, loading] = useSession();
  if (!session) {
    return <div>User is not logged in</div>;
  }
  return (
    <React.Fragment>
      <div>{session.user.email} is logged in</div>
      <button onClick={() => signOut()}>Signout</button>
    </React.Fragment>
  );
}

Profile.propTypes = {};

export default Profile;
