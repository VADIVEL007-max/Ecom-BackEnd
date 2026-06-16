/**
 * Product Service
 * Database operations for Product module
 */
const prisma = require("../config/prisma");


//get all product in db
const getAllProducts = async () => {
  return await prisma.product.findMany();
};
//get all product in db by using Id
const getProductbyid = async () => {
  return await prisma.product.findUnique({where:{id:id}}
    
  );
};
// add a new product in db
const addnewproductdb=async(productdata)=>{
    return await prisma.product.create({
         data: productdata       
    })
}
// update the product by using the Id
const updateproductdb=async(id,updatedata)=>{
  return await prisma.product.update({
            where:{
                id
            },
            data:
              updatedata,     
        })

 };
// delete a product in db by using Id
 const deleteproductdb=async(productid)=>{
  return await prisma.product.delete({
            where:{
                id:productid
            }  
        })

 };

module.exports = {
  getAllProducts,addnewproductdb,updateproductdb,deleteproductdb
};