const express = require("express");
const {newCategory,getProducts, getbyCategoryid}= require("../controllers/category.controller");

const router = express.Router();




router.post("/",newCategory)

router.get("/", getProducts);

router.get("/:categoryId",getbyCategoryid)



module.exports = router;