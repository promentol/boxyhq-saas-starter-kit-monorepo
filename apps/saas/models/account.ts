import { prisma } from '@saas/prisma';

export const getAccount = async (key: { userId: string }) => {
  return await prisma.account.findFirst({
    where: key,
  });
};
