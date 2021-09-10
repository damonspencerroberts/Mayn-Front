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
