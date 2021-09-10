import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LargeLogo from '../Logo/Large';
import { Container } from 'react-bootstrap';
import { useSession, signOut } from 'next-auth/client';
import Button from '../Button';
import Avatar from '../Avatar';

function Navbar(props) {
  const [session, loading] = useSession();
  console.log(session);

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
      {session ? (
        <div className="d-flex align-items-center justify-content-end">
          <Button variant="secondary" onClick={() => signOut()}>
            Sign out
          </Button>
          <Link href="/profile">
            <a className="text-decoration-none">
              <Avatar imageSrc="https://source.unsplash.com/random" />
            </a>
          </Link>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-end">
          <Link href="/login">
            <a className="text-decoration-none">
              <Button variant="secondary">Login</Button>
            </a>
          </Link>
          <Link href="/">
            <a className="text-decoration-none">
              <Button variant="primary">Sign Up</Button>
            </a>
          </Link>
        </div>
      )}
    </Container>
  );
}

Navbar.propTypes = {};

export default Navbar;
