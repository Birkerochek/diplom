import { PrismaClient } from "../../../app/generated/prisma";

const datasourceUrl = process.env.DATABASE_URL;
if (!datasourceUrl) {
  throw new Error("DATABASE_URL is not set");
}

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ??
  new PrismaClient({
    datasources: {
      db: { url: datasourceUrl },
    },
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
