const { createCart } = require("../services/cart.service");

const addToCart = async (req, res) => {
  try {

    const { productId, quantity } = req.body;

    const userId = req.user.id;

    if (!productId || !quantity) {
      return res.status(400).json({
        message: "productId and quantity are required"
      });
    }

    const cart = await createCart({
      userId,
      productId,
      quantity
    });

    res.status(201).json({
      message: "Product added to cart successfully",
      data: cart
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  addToCart
};