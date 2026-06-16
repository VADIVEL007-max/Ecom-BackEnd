/**
 * Product Routes
 * Product API endpoints
 */
const {getproduct,getproductbyid, addnewproduct, updateproduct, deleteproduct} = require("../controllers/product.controller");
const express = require("express");


const router = express.Router();

router.get("/",getproduct)

router.get("/:id",getproductbyid)

router.post("/",addnewproduct)

router.put("/:id",updateproduct)

router.delete("/:id",deleteproduct)


module.exports = router;