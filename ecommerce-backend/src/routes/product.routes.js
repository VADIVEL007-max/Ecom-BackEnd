/**
 * Product Routes
 * Product API endpoints
 */
const {getproduct,getproductbyid, addnewproduct, updateproduct, deleteproduct} = require("../controllers/product.controller");
const express = require("express");
const adminMiddleware = require("../middleware/admin.middleware");
const authmiddleware = require("../middleware/auth.middleware");


const router = express.Router();

router.get("/",getproduct)

router.get("/:id",getproductbyid)

router.post("/",authmiddleware,adminMiddleware,addnewproduct)

router.put("/:id",authmiddleware,adminMiddleware,updateproduct)

router.delete("/:id",authmiddleware,adminMiddleware,deleteproduct)


module.exports = router;