/**
 * Product Controller
 * Handles request validation and responses
 */
const prisma = require("../config/prisma");
const { getAllProducts, addnewproductdb, updateproductdb, deleteproductdb } = require("../services/product.service");

// Fetch all products
 const getproduct =async(req,res)=>{
    try {
         const allproducts= await getAllProducts();
         res.status(200).json({Message:"fetch sucessfull....",data:allproducts})
    } catch (error) {
        console.log("internal server error");
        res.status(500).json({Message:"internal server error",error:error.message})  
    } 
};

// get a product by using the Id
const getproductbyid= async(req,res)=>{
     try {
        const {id}=req.params;
         const productsbyid= await prisma.product.findUnique({
            where:{
                id:id,
            }
         });
         res.status(200).json({Message:"fetch sucessfull....",data:productsbyid})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message:"internal server error",error:error.Message})
        
    } 

}

// add anew product in DB, Validate request body Create product
const addnewproduct=async(req,res)=>{
    try {

        const { 
            title,
            description,
            price,
            image,
            stock,
            category,}=req.body;

            if (
                !title ||
                !description ||
                !price||
                !image ||
                !stock||
                !category
                ) {
             return res.status(400).json({message: "All fields are required", });}

    const addnewproduct=await addnewproductdb(req.body)
    res.status(201).json({message:"product added successfully",data:addnewproduct})

    } catch (error) {
        console.log(error);
    
        res.status(500).json({message:"internal server error",error:error.message})
        
        
    }
}

// Update existing product
const updateproduct=async(req,res)=>{
    try {
        const {id}= req.params;

        const update= await updateproductdb(id,req.body);
        res.status(201).json({Message:"product update successfully...",data:update})
        
    } catch (error) {
         console.log(error);
        res.status(500).json({Message:"internal server error",error:error.message})
        
    }

}

 // Delete product
const deleteproduct=async(req,res)=>{
    try {
        const {id}=req.params;

        const delproduct=await deleteproductdb(id);
         res.status(201).json({Message:"product deleted successfully...",data:delproduct})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({Message:"internal server error",error:error.message})
        
    }
}


module.exports={getproduct,getproductbyid,addnewproduct,updateproduct,deleteproduct};