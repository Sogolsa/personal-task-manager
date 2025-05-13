// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@/generated/prisma";

// Golbal Prisma to prevent multiple instances of PrismaClient in development

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
