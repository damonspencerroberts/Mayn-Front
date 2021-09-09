import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.scss';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mayn - Meeting made simple.</title>
        <meta name="description" content="Meeting made simple." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
