const prisma = require("../config/prisma");

const toggleWishlistService = async (userId, productId) => {
  try {
    //chect the product is already in wishlist table then store the existingwishlist
    const existingWishlist = await prisma.wishlist.findFirst({
      where: {
        userId,
        productId,
      },
    });
//if ture delete the id
    if (existingWishlist) {
      await prisma.wishlist.delete({
        where: {
          id: existingWishlist.id,
        },
      });

      return {
        success: true,
        message: "Product removed from wishlist",
      };
    }
// else na create or add the wishlist
    await prisma.wishlist.create({
      data: {
        userId,
        productId,
      },
    });
//then return the response
    return {
      success: true,
      message: "Product added to wishlist",
    };
  } catch (error) {
        throw error;
  }
};
const getWishlistService = async (userId) => {
  try {
    const wishlist = await prisma.wishlist.findMany({
      where: {
        userId,
      },
      include: {
        product: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return wishlist;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  toggleWishlistService,
  getWishlistService,
};