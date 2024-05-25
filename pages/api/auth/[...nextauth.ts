//[] used by nextjs for dynamic routes. ...nextauth is a catchall for any routes requiring auth

import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import prisma from '../../../lib/prisma';
import { Logger } from 'winston';


const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

const options = {
    //uses github as an auth provider
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  //uses an adapter to integrate prisma with nextauth for prisma to handle user accts, sessions, etc.
  adapter: PrismaAdapter(prisma),
  //uses a secret key for handling session tokens and data
  secret: process.env.SECRET
};


