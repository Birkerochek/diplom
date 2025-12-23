import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify } from "argon2";
import { loginSchema } from "@shared/zod/auth.schema";
import { prisma } from "@shared/lib/prisma";
import type { User } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";
import { PAGES } from "@shared/constants";

const MAX_AGE = 30 * 24 * 60 * 60; 

export const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  useSecureCookies: true,
  session: {
    strategy: "jwt",
    maxAge: MAX_AGE,
  },
  jwt: {
    maxAge: MAX_AGE,
  },
  pages: {
    signIn: PAGES.LOGIN,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);

        if (!parsed.success) {
          throw new Error(parsed.error.issues[0]?.message ?? "Некорректные данные");
        }

        const { email, password } = parsed.data;

        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          throw new Error("Неверный email или пароль");
        }

        const isValid = await verify(user.passwordHash, password);

        if (!isValid) {
          throw new Error("Неверный email или пароль");
        }

        const authUser: User = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };

        return authUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userWithRole = user as User | (AdapterUser & { role?: string });

        token.id = userWithRole.id;
        token.email = userWithRole.email;
        token.name = userWithRole.name;
        if ("role" in userWithRole && userWithRole.role) {
          token.role = userWithRole.role;
        }
      }
      return token;
    },
    async session({ session, token }) {
      const role = token.role ?? "volunteer";

      if (session.user) {
        if (token.id) {
          session.user.id = token.id;
        }
        if (token.email) {
          session.user.email = token.email;
        }
        if (token.name) {
          session.user.name = token.name;
        }
        session.user.role = role;
      } else {
        session.user = {
          id: token.id ?? "",
          email: token.email ?? "",
          name: token.name ?? undefined,
          role,
        };
      }
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
};
