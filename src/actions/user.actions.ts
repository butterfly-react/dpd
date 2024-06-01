'use server'

import { prisma } from "@/lib/prisma";
import { DeliveryProps } from "./delivery.details";

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error('Unable to fetch users');
  }
};

export const updateUser = async (id: number, data: Partial<DeliveryProps>) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return user;
  } catch (error) {
    throw new Error('Unable to update user');
  }
};

export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Unable to delete user');
  }
};