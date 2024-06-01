'use server'
import { client } from "@/lib/prisma";




export type DeliveryProps = {
 
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
        additionalInfo?: string;
 
}

export const deliveryRegister = async (data: DeliveryProps) => {

  try {
    const user = await client.user.create({
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
    throw new Error('Unable to save user');
  }
};
