import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { canAccessAdminScope, canAccessOrganizerScope, canAccessVolunteerScope } from "@shared/lib/access";

const VOLUNTEER_ROOT = "/volunteer";
const ORGANIZER_ROOT = "/organizer";
const ADMIN_ROOT = "/admin";
const LOGIN_PATH = "/auth/login";

export async function proxy(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;

  if (!secret) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret });

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

  if (pathname.startsWith(VOLUNTEER_ROOT) && !canAccessVolunteerScope(role)) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = role === "admin" ? ADMIN_ROOT : ORGANIZER_ROOT + "/dashboard";
    redirectUrl.searchParams.delete("callbackUrl");
    return NextResponse.redirect(redirectUrl);
  }

  if (pathname.startsWith(ORGANIZER_ROOT) && !canAccessOrganizerScope(role)) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = role === "admin" ? ADMIN_ROOT : VOLUNTEER_ROOT + "/dashboard";
    redirectUrl.searchParams.delete("callbackUrl");
    return NextResponse.redirect(redirectUrl);
  }

  if (pathname.startsWith(ADMIN_ROOT) && !canAccessAdminScope(role)) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname =
      role === "organizer" ? ORGANIZER_ROOT + "/dashboard" : VOLUNTEER_ROOT + "/dashboard";
    redirectUrl.searchParams.delete("callbackUrl");
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/volunteer/:path*", "/organizer/:path*", "/admin/:path*"],
};
