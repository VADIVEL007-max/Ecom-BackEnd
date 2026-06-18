const { createCategory ,getAllProducts} = require("../services/category.service");

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


const getProducts = async (req, res) => {
  try {

    const products = await getAllProducts();

    res.status(200).json({
      data: products
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
module.exports = {
    newCategory,getProducts
};