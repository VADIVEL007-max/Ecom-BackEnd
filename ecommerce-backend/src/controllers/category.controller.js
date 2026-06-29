const { createCategory ,getAllProducts, getcategoryid, getAllCategories} = require("../services/category.service");

// create anew categoury in db like it handle by admin
const newCategory = async (req, res) => {
    try {

        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Category name is required"
            });
        }

        const category = await createCategory({
            name
        });

        res.status(201).json({
            message: "Category created successfully",
            data: category
        });

    } catch (error) {

        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });

    }
};

// get all product with category id
const getProducts = async (req, res) => {
  try {

    const products = await getAllProducts();

    res.status(200).json({data: products
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getallCategory=async(req,res)=>{
    try {
        const categories=await getAllCategories();
        res.status(200).json({message:"get all Category successfully...",data:categories})
    } catch (error) {
        res.status(500).json({message: error.message });
    }
}

// now it getbyCategoryid like user click mobile it only give the mibiles using the id 
const getbyCategoryid=async(req,res)=>{
    try {
        const {categoryId}=req.params;
        // console.log(req.params);
        // console.log(categoryId);
        
        const categories=await getcategoryid(categoryId);

        res.status(200).json({message:"get by Categoryid successfully...",data:categories})
        
    } catch (error) {

        console.log(error);
        
        res.status(500).json({message: error.message });
  
    }
}
module.exports = {
    newCategory,getProducts,getbyCategoryid,getcategoryid,getallCategory
};