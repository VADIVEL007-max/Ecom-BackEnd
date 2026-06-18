const { createCart,getUserCart,updateCartQuantity} = require("../services/cart.service");


// user add product in his cart page...
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

//  get the user cart detials using the userid...
const getCart = async (req, res) => {
  try {

    const userId = req.user.id;

    const cartItems = await getUserCart(userId);

    res.status(200).json({
      message: "Cart fetched successfully",
      data: cartItems,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

const updateCart = async (req, res) => {
  try {

    const { id } = req.params;
    const { quantity } = req.body;

    const cart = await updateCartQuantity(id, quantity);

    res.status(200).json({
      message: "Cart updated successfully",
      data: cart,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {addToCart,getCart,updateCart};