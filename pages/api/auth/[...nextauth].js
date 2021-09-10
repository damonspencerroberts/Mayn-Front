import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

const authOptions = (req, res) => {
  return {
    providers: [
      Providers.Credentials({
        name: 'Credentials',
        authorize: async (credentials) => {
          const user = await axios.post(
            'https://bk-mayn.herokuapp.com/api/login',
            {
              user: {
                password: credentials.password,
                email: credentials.email,
              },
            },
            {
              headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
              },
            }
          );
          const { status, response } = user.data;
          console.log('[userresponse]', response);

          if (status === 200) {
            return response;
          } else {
            return null;
          }
        },
      }),
    ],
    callbacks: {
      session: async (session, user) => {
        session.accessToken = user.accessToken;
        return Promise.resolve(session);
      },
    },
    jwt: async (token, user, account, profile) => {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
  };
};

export default (req, res) => NextAuth(req, res, authOptions(req, res));
