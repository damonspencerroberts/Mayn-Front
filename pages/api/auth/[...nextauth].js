import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

const providers = [
  Providers.Credentials({
    name: 'Credentials',
    authorize: async (credentials) => {
      console.log(credentials);
      const user = await axios.post(
        'https://bk-mayn.herokuapp.com/login',
        {
          password: credentials.password,
          email: credentials.email,
        },
        {
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
          },
        }
      );

      if (user) {
        return user.data;
      } else {
        return null;
      }
    },
  }),
];

const callbacks = {
  // Getting the JWT token from API response
  async session(session, user) {
    session.accessToken = user.accessToken;
    console.log(session);
    console.log(user);
    return Promise.resolve(session);
  },
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.token;
    }

    return token;
  },
};

const options = {
  providers,
  callbacks,
};

export default (req, res) => NextAuth(req, res, options);
