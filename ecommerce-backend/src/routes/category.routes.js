const express = require("express");
const {newCategory,getProducts}= require("../controllers/category.controller");

const router = express.Router();




router.post("/",newCategory)
router.get("/", getProducts);



module.exports = router;