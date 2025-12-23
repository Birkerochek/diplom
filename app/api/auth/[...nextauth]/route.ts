import NextAuth from "next-auth";
import { nextAuthOptions } from "@shared/config/nextAuth";

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
