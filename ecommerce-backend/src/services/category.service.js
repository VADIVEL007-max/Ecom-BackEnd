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

const getcategoryid=async(categoryId)=>{
   return await prisma.product.findMany({
    where: {
      categoryId: categoryId
    },
    include: {
      category: true
    }
  });

}

module.exports = {
    createCategory,getAllProducts,getcategoryid
};