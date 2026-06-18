const prisma = require("../config/prisma");

const createCategory = async (categoryData) => {
    return await prisma.category.create({
        data: categoryData
    });
};



const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: {
      category: true
    }
  });
};

module.exports = {
    createCategory,getAllProducts
};