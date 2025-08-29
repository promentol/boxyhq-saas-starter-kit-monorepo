import { prisma } from '@saas/prisma';

export const getAllServices = async () => {
  return await prisma.service.findMany();
};
