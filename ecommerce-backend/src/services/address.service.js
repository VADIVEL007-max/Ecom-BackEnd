const prisma = require("../config/prisma");

// Find Address By Id
const findAddressById = async (id) => {
  return prisma.address.findUnique({
    where: {
      id,
    },
  });
};
// Create Address
const createAddress = async (data) => {
  return prisma.address.create({
    data,
  });
};

// Get User Addresses
const getAddresses = async (userId) => {
  return prisma.address.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
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

module.exports = {
  createAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
findAddressById,
};