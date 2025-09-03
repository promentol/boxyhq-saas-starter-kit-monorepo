
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@saas/prisma';
import type { NextAuthOptions } from 'next-auth';
import env from '../lib/env';

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      // Add providers as needed
    ],
    session: {
      strategy: 'jwt',
      maxAge: 14 * 24 * 60 * 60, // 14 days
    },
    secret: env.nextAuth.secret,
    callbacks: {
      async session({ session, token }) {
        if (session?.user && token.sub) {
          session.user.id = token.sub;
        }
        return session;
      },
    },
    pages: {
      signIn: '/auth/login',
      error: '/auth/error',
    },
  };
  