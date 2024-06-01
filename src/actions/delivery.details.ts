"use server";
import { prisma } from "@/lib/prisma";

export type DeliveryProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  taxNumber: string;
  tajNumber: string;
  additionalInfo?: string | null;
  createdAt: Date;
  updatedAt: Date;
};
export const deliveryRegister = async (data: DeliveryProps) => {
  try {
    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        country: data.country,
        streetAddress: data.streetAddress,
        city: data.city,
        state: data.state,
        postalCode: data.postalCode,
        taxNumber: data.taxNumber,
        tajNumber: data.tajNumber,
        additionalInfo: data.additionalInfo,
      },
    });
    return user;
  } catch (error) {
    throw new Error("Unable to save user");
  }
};
