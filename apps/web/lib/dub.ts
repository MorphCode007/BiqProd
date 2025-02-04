import { Dub } from "dub";

export const dub = new Dub();

// fetch Dub customer using their external ID (ID in our database)
export const getDubCustomer = async (userId: string) => {
  try {
    return await dub.customers.get({
      id: `ext_${userId}`,
    });
  } catch (error) {
    return null;
  }
};
