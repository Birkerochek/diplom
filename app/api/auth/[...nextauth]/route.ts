export const runtime = 'nodejs';

import NextAuth from 'next-auth';
import { nextAuthOptions } from '@shared/config/nextAuth';
import { headers, cookies } from 'next/headers';
const handler = NextAuth(nextAuthOptions);
console.log('--- AUTH ROUTE INIT ---');
const h = await headers();
const c = await cookies();
console.log('x-forwarded-proto:', h.get('x-forwarded-proto'));
console.log('host:', h.get('host'));
console.log('cookie header:', h.get('cookie'));
console.log('parsed cookies:', c.getAll());
export { handler as GET, handler as POST };
