import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';
import apiPost from '../../../services/apiPost';

const authOptions = (req, res) => {
  return {
    providers: [
      Providers.Credentials({
        name: 'Credentials',
        authorize: async (credentials) => {
          const body = {
            user: {
              password: credentials.password,
              email: credentials.email,
            },
          };
          const user = await apiPost('/login', body);
          const { headers } = user;
          const { authorization } = headers;
          const { status, response } = user.data;
          console.log('[userresponse]', response);

          if (status === 200) {
            return { ...response, auth: authorization };
          } else {
            return null;
          }
        },
      }),
    ],
    callbacks: {
      session: async (session, user) => {
        const modifySession = { ...session, user };
        return Promise.resolve(modifySession);
      },
      jwt: async (token, user) => {
        if (user) {
          token.accessToken = user.token;
          token.email = user.email;
          token.username = user.username;
          token.description = user.description;
          token.age = user.age;
          token.auth = user.auth.split(' ')[1];
          token.avatar = user.avatar;
        }
        // console.log('[token]', token);
        // console.log('[user]', user);
        // console.log('[account]', account);
        // console.log('[profile]', profile);
        return Promise.resolve(token);
      },
    },
  };
};

export default (req, res) => NextAuth(req, res, authOptions(req, res));
