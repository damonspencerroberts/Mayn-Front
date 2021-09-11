import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LargeLogo from '../Logo/Large';
import { Container, Modal as BootstrapModal } from 'react-bootstrap';
import { useSession, signOut } from 'next-auth/client';
import Button from '../Button';
import Avatar from '../Avatar';
import Modal from '../Modal';
import Login from '../Forms/Login';
import Header from '../Header';

function Navbar(props) {
  const [session, loading] = useSession();
  const [isShowSignIn, setIsShowSignIn] = useState(false);
  const handleHide = () => setIsShowSignIn(false);
  const handleShow = () => setIsShowSignIn(true);

  return (
    <React.Fragment>
      <Modal show={isShowSignIn} centered onHide={handleHide} fullscreen="md-down">
        <div className="d-flex align-items-center justify-content-center">
          <Header classnames="font-size-32">Login to your account</Header>
        </div>
        <div>
          <Login />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <span className="grey wt-300 main-font font-size-16">
            Don&apos;t have an account yet?
          </span>
          <Link href={{ pathname: '/signup', query: { step: 1 } }}>
            <a className="text-decoration-none">
              <span
                role="button"
                className="dark wt-600 main-font font-size-16 ms-2"
                onClick={() => setIsShowSignIn(false)}
              >
                Sign Up
              </span>
            </a>
          </Link>
        </div>
      </Modal>
      <Container className="d-flex align-items-center justify-content-between py-5">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center">
            <Link href="/">
              <a>
                <LargeLogo className="mr-3" />
              </a>
            </Link>
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
                <Avatar imageSrc={session?.user.avatar} />
              </a>
            </Link>
          </div>
        ) : (
          <div className="d-flex align-items-center justify-content-end">
            <Button variant="secondary" onClick={() => handleShow()}>
              Login
            </Button>
            <Link href={{ pathname: '/signup', query: { step: 1 } }}>
              <a className="text-decoration-none">
                <Button variant="primary">Sign up</Button>
              </a>
            </Link>
          </div>
        )}
      </Container>
    </React.Fragment>
  );
}

Navbar.propTypes = {};

export default Navbar;
