const prisma = require("../config/prisma");



const getAllProducts = async () => {
  return await prisma.product.findMany();
};


const getProductbyid = async () => {
  return await prisma.product.findUnique({where:{id:id}}
    
  );
};


const addnewproductdb=async(productdata)=>{
    return await prisma.product.create({
         data: productdata       
    })
}



module.exports = {
  getAllProducts,addnewproductdb
};