import { prisma } from '@saas/prisma';
import { Service } from '@saas/prisma';

export const getAllPrices = async () => {
  return await prisma.price.findMany();
};

export const getServiceByPriceId = async (
  priceId: string
): Promise<Service | undefined> => {
  const data = await prisma.price.findUnique({
    where: {
      id: priceId,
    },
    include: {
      service: true,
    },
  });
  return data?.service;
};
