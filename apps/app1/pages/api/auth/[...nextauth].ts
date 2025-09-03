import NextAuth from 'next-auth';
import { authOptions } from '@saas/shared/lib/auth-options';

export default NextAuth(authOptions);
