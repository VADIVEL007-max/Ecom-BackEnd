const { placeOrder,getUserOrders,getOrderById } = require("../services/order.service");

const createOrder = async (req, res) => {
  try {

    const userId = req.user.id;
    const { addressId } = req.body;

    const order = await placeOrder(userId,addressId);

    res.status(201).json({
      message: "Order placed successfully",
      data: order,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

const getOrders = async (req, res) => {
  try {

    const userId = req.user.id;

    const orders = await getUserOrders(userId);

    res.status(200).json({
      message: "Orders fetched successfully",
      data: orders,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

const getSingleOrder = async (req, res) => {
  try {

    const { id } = req.params;
    const userId = req.user.id;

    const order = await getOrderById(id, userId);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order fetched successfully",
      data: order,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createOrder,getOrders,getSingleOrder
};