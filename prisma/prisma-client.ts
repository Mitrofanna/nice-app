import { PrismaClient } from '@prisma/client';

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof PrismaClientSingleton>;
}

export const prisma = global.prismaGlobal ?? PrismaClientSingleton();

if (process.env.NODE_ENV !== 'production') global.prismaGlobal = prisma;
