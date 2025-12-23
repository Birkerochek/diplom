export const runtime = 'nodejs';

import NextAuth from 'next-auth';
import { nextAuthOptions } from '@shared/config/nextAuth';
import { headers, cookies } from 'next/headers';

const nextAuthHandler = NextAuth(nextAuthOptions);

async function handlerWithLogs(req: Request) {
  const h = await headers();
  const c = await cookies();

  console.log('--- AUTH REQUEST ---');
  console.log('x-forwarded-proto:', h.get('x-forwarded-proto'));
  console.log('host:', h.get('host'));
  console.log('cookie header:', h.get('cookie'));
  console.log('parsed cookies:', c.getAll());

  return nextAuthHandler(req);
}

export { handlerWithLogs as GET, handlerWithLogs as POST };
