import React from 'react';
import { Provider } from 'next-auth/client';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
