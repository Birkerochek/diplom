import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify } from "argon2";
import { loginSchema } from "@shared/zod/auth.schema";
import { prisma } from "@shared/lib/prisma";
import type { User } from "next-auth";
import { PAGES } from "@shared/constants";

const MAX_AGE = 30 * 24 * 60 * 60; 
const ACCESS_STATE_SYNC_INTERVAL_MS = 60 * 1000;

const getUserAccessState = async (userId?: string | null, email?: string | null) => {
  if (!userId && !email) {
    return null;
  }

  if (userId) {
    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        organizerRoleRequest: {
          select: {
            status: true,
            rejectionReason: true,
            requestedAt: true,
            reviewedAt: true,
          },
        },
      },
    });
  }

  return prisma.user.findUnique({
    where: { email: email ?? undefined },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      organizerRoleRequest: {
        select: {
          status: true,
          rejectionReason: true,
          requestedAt: true,
          reviewedAt: true,
        },
      },
    },
  });
};

export const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
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

        const user = await prisma.user.findUnique({
          where: { email },
          include: {
            organizerRoleRequest: {
              select: {
                status: true,
                rejectionReason: true,
                requestedAt: true,
                reviewedAt: true,
              },
            },
          },
        });

        if (!user) {
          throw new Error("Неверный email или пароль");
        }

        const isValid = await verify(user.passwordHash, password);

        if (!isValid) {
          throw new Error("Неверный email или пароль");
        }

        if (!user.isActive) {
          throw new Error("Аккаунт заблокирован");
        }

        const authUser: User = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          organizerApplicationStatus: user.organizerRoleRequest?.status ?? null,
          organizerApplicationRejectionReason: user.organizerRoleRequest?.rejectionReason ?? null,
        };

        return authUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const userWithRole = user as User & {
          organizerApplicationStatus?: string | null;
          organizerApplicationRejectionReason?: string | null;
        };

        token.id = userWithRole.id;
        token.email = userWithRole.email;
        token.name = userWithRole.name;
        if (userWithRole.role) {
          token.role = userWithRole.role;
        }
        token.organizerApplicationStatus = userWithRole.organizerApplicationStatus ?? null;
        token.organizerApplicationRejectionReason =
          userWithRole.organizerApplicationRejectionReason ?? null;
        token.accessStateSyncedAt = Date.now();
      }

      const lastSyncedAt =
        typeof token.accessStateSyncedAt === "number" ? token.accessStateSyncedAt : 0;
      const shouldSyncAccessState =
        !lastSyncedAt || Date.now() - lastSyncedAt >= ACCESS_STATE_SYNC_INTERVAL_MS;

      if (shouldSyncAccessState) {
        const freshUser = await getUserAccessState(
          typeof token.id === "string" ? token.id : null,
          typeof token.email === "string" ? token.email : null
        );

        if (freshUser) {
          token.id = freshUser.id;
          token.email = freshUser.email;
          token.name = freshUser.name;
          token.role = freshUser.role;
          token.organizerApplicationStatus = freshUser.organizerRoleRequest?.status ?? null;
          token.organizerApplicationRejectionReason =
            freshUser.organizerRoleRequest?.rejectionReason ?? null;
          token.accessStateSyncedAt = Date.now();
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
        session.user.organizerApplicationStatus =
          typeof token.organizerApplicationStatus === "string"
            ? token.organizerApplicationStatus
            : null;
        session.user.organizerApplicationRejectionReason =
          typeof token.organizerApplicationRejectionReason === "string"
            ? token.organizerApplicationRejectionReason
            : null;
      } else {
        session.user = {
          id: token.id ?? "",
          email: token.email ?? "",
          name: token.name ?? undefined,
          role,
          organizerApplicationStatus:
            typeof token.organizerApplicationStatus === "string"
              ? token.organizerApplicationStatus
              : null,
          organizerApplicationRejectionReason:
            typeof token.organizerApplicationRejectionReason === "string"
              ? token.organizerApplicationRejectionReason
              : null,
        };
      }
      return session;
    },
  },
};
