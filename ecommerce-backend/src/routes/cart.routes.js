const authmiddleware = require("../middleware/auth.middleware");
const {addToCart,getCart,updateCart,deleteCart}= require("../controllers/cart.controller");
const express = require("express");


const router = express.Router();


router.post("/", authmiddleware, addToCart);

router.get("/", authmiddleware, getCart);

router.put("/:id", authmiddleware, updateCart);

router.delete("/:id", authmiddleware, deleteCart);



module.exports = router;