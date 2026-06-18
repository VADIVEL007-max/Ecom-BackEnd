const prisma = require("../config/prisma");

const createCart = async (cartData) => {

  return await prisma.cart.create({
    data: cartData
  });

};


const getUserCart = async (userId) => {
  return await prisma.cart.findMany({
    where: {
      userId: userId,
    },
    include: {
      product: true,
    },
  });
};


const updateCartQuantity = async (id, quantity) => {
  return await prisma.cart.update({
    where: {
      id: id,
    },
    data: {
      quantity: quantity,
    },
  });
};


module.exports = {
  createCart,getUserCart,updateCartQuantity
};