const prisma = require("../config/prisma");

const placeOrder = async (userId, addressId) => {

  // Get Cart Items
  const cartItems = await prisma.cart.findMany({
    where: {
      userId: userId,
    },
    include: {
      product: true,
    },
  });

  if (cartItems.length === 0) {
    throw new Error("Cart is empty");
  }

  // Calculate Total
  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  // Create Order
  const order = await prisma.order.create({
    data: {
      userId,
      addressId,
      totalAmount,
      status: "PENDING",
    },
  });

  // Create Order Items
  for (const item of cartItems) {
    await prisma.orderItem.create({
      data: {
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.product.price,
      },
    });
  }

  // Clear Cart
  await prisma.cart.deleteMany({
    where: {
      userId: userId,
    },
  });

  return order;
};

const getUserOrders = async (userId) => {
  return await prisma.order.findMany({
    where: {
      userId: userId,
    },
    include: {
      address: true,

      orderItems: {
        include: {
          product: true,
        },
      },
    }
  });
};
 //
const getOrderById = async (orderId, userId) => {
  return await prisma.order.findFirst({
    where: {
      id: orderId,
      userId: userId,
    },
  
   include: {
  address: true,

  orderItems: {
    include: {
      product: true,
    },
  },
  }
  });
};

module.exports = {
  placeOrder,getUserOrders,getOrderById
};