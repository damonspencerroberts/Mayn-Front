import Head from 'next/head';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { getSession } from 'next-auth/client';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import apiPost from '../services/apiPost';

export default function Home({ user }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mayn - Meeting made simple.</title>
        <meta name="description" content="Meeting made simple." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="p-3">
        <Navbar profileImg={user?.response?.avatar} />
        <Container fluid>
          <Row>
            <Col md className="d-flex justify-content-center">
              <div className="d-flex flex-column" style={{ width: '80%' }}>
                <Header classnames="d-flex align-items-center justify-content-center font-size-64">
                  Meeting made simple.
                </Header>
                <div className="d-flex align-items-start flex-column py-2 grey font-size-24 wt-300 main-font">
                  <p>Did you just arrive in a new city?</p>
                  <p>Are you looking to meet new people?</p>
                  <p>You have come to the right place!</p>
                  <p className="dark">Mayn makes meeting new people simple.</p>
                </div>
                <div className="d-flex align-items-center">
                  <Link href={{ pathname: '/signup', query: { step: 1 } }}>
                    <a className="text-decoration-none">
                      <Button>Get Started</Button>
                    </a>
                  </Link>
                  <div className="ms-4 font-size-24 main wt-300 main-font">It&apos;s Free</div>
                </div>
              </div>
            </Col>
            <Col md className="d-flex justify-content-center">
              <div className={styles.HomeImageContainer} />
            </Col>
          </Row>
        </Container>
      </Container>

      <footer className={styles.footer}></footer>
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.object,
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return { props: {} };
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
