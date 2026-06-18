const prisma = require("../config/prisma");
const createCart = async (cartData) => {

  const { userId, productId, quantity } = cartData;

  const existingCart = await prisma.cart.findFirst({
    where: {
      userId,
      productId,
    },
  });

  if (existingCart) {
    return await prisma.cart.update({
      where: {
        id: existingCart.id,
      },
      data: {
        quantity: existingCart.quantity + quantity,
      },
    });
  }

  return await prisma.cart.create({
    data: {
      userId,
      productId,
      quantity,
    },
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


const deleteCartItem = async (id) => {
  return await prisma.cart.delete({
    where: {
      id: id,
    },
  });
};


module.exports = {
  createCart,getUserCart,updateCartQuantity,deleteCartItem
};