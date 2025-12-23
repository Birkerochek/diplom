"use client";

import {
  signIn as nextAuthSignIn,
  signOut as nextAuthSignOut,
  useSession as nextAuthUseSession,
  getSession as nextAuthGetSession,
} from "next-auth/react";

export const signIn = (email: string, password: string) =>
  nextAuthSignIn("credentials", {
    email,
    password,
    redirect: false,
  });

export const signOut = () =>
  nextAuthSignOut({
    redirect: true,
    callbackUrl: "/",
  });

export const useSession = nextAuthUseSession;
export const getSession = nextAuthGetSession;
