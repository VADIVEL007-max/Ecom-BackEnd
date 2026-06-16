const prisma = require("../config/prisma");
const { getAllProducts, addnewproductdb } = require("../services/product.service");

 const getproduct =async(req,res)=>{
    try {
         const allproducts= await getAllProducts();
         res.status(200).json({Message:"fetch sucessfull....",data:allproducts})
    } catch (error) {
        console.log("internal server error");
        res.status(500).json({Message:"internal server error",error:error.message})  
    } 
};




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
        console.log("internal server error");
        res.status(500).json({Message:"internal server error",error:error.Message})
        
    } 

}



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




module.exports={getproduct,getproductbyid,addnewproduct};