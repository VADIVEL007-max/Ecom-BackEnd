const express = require("express");
const {newCategory,getProducts, getbyCategoryid}= require("../controllers/category.controller");
const authmiddleware = require("../middleware/auth.middleware");

const router = express.Router();




router.post("/",newCategory)

router.get("/", getProducts);

// add auth in this api for testing purpose only
router.get("/:categoryId",authmiddleware,getbyCategoryid)



module.exports = router;