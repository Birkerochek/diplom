export const runtime = 'nodejs';

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const VOLUNTEER_ROOT = "/volunteer";
const ORGANIZER_ROOT = "/organizer";
const LOGIN_PATH = "/auth/login";

export async function proxy(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;
  const url = req.nextUrl.pathname;
  const cookie = req.headers.get('cookie');
  
  if (!secret) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret, secureCookie: true });

  const { pathname } = req.nextUrl;

  if (!token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = LOGIN_PATH;
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  const role = typeof token?.role === "string" ? token.role : undefined;

  if (!role) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = LOGIN_PATH;
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith(VOLUNTEER_ROOT) && role !== "volunteer") {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = ORGANIZER_ROOT + "/dashboard";
    redirectUrl.searchParams.delete("callbackUrl");
    return NextResponse.redirect(redirectUrl);
  }

  if (pathname.startsWith(ORGANIZER_ROOT) && role !== "organizer") {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = VOLUNTEER_ROOT + "/dashboard";
    redirectUrl.searchParams.delete("callbackUrl");
    return NextResponse.redirect(redirectUrl);
  }

  console.log('[MIDDLEWARE]', {
    url,
    cookie,
  });
  return NextResponse.next();
}

export const config = {
  matcher: ["/volunteer/:path*", "/organizer/:path*",],
};
