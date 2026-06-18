const prisma = require("../config/prisma");

const createCart = async (cartData) => {

  return await prisma.cart.create({
    data: cartData
  });

};

module.exports = {
  createCart
};