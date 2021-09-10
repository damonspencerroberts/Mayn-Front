import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Avatar from '../components/Avatar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mayn - Meeting made simple.</title>
        <meta name="description" content="Meeting made simple." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="p-3">
        <Navbar />
        <Container fluid>
          <Row>
            <Col md className="d-flex justify-content-center">
              <div className="d-flex flex-column" style={{ width: '80%' }}>
                <Header classnames="d-flex align-items-center justify-content-center">
                  Meeting made simple.
                </Header>
                <div className="d-flex align-items-start flex-column py-2 grey font-size-24 wt-300 main-font">
                  <p>Did you just arrive in a new city?</p>
                  <p>Are you looking to meet new people?</p>
                  <p>You have come to the right place!</p>
                  <p className="dark">Mayn makes meeting new people simple.</p>
                </div>
                <div className="d-flex align-items-center">
                  <Button>Get Started</Button>
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
