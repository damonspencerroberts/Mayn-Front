import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LargeLogo from '../Logo/Large';
import { Container } from 'react-bootstrap';
import { useSession, signOut } from 'next-auth/client';
import Button from '../Button';
import Avatar from '../Avatar';
import Modal from '../Modal';
import Login from '../Forms/Login';

function Navbar(props) {
  const [session, loading] = useSession();
  const [isShowSignIn, setIsShowSignIn] = useState(false);
  const handleHide = () => setIsShowSignIn(false);
  const handleShow = () => setIsShowSignIn(true);

  return (
    <React.Fragment>
      <Modal show={isShowSignIn} centered onHide={handleHide}>
        <Login />
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
            <Link href="/">
              <a className="text-decoration-none">
                <Button variant="primary">Sign Up</Button>
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
