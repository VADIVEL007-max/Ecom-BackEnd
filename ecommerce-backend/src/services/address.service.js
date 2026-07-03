const prisma = require("../config/prisma");
console.log("Prisma Keys:", Object.keys(prisma));
console.log("Address Model:", prisma.address);


// Create Address
const createAddress = async (data) => {

 return prisma.address.create({
    data,
  });
};

// Get User Addresses
const getAddresses = async (userId) => {
  console.log(userId);
  return prisma.address.findMany({
    where: {
      userId,
    }
  });
};

// Update Address
const updateAddress = async (id, data) => {
  return prisma.address.update({
    where: {
      id,
    },
    data,
  });
};

// Delete Address
const deleteAddress = async (id) => {
  return prisma.address.delete({
    where: {
      id,
    },
  });
};
// Find Address By Id
const findAddressById = async (id) => {
  return prisma.address.findUnique({
    where: {
      id,
    },
  });
};

module.exports = {
  createAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
findAddressById,
};