const authmiddleware = require("../middleware/auth.middleware");
const {addToCart,getCart,updateCart}= require("../controllers/cart.controller");
const express = require("express");


const router = express.Router();


router.post("/", authmiddleware, addToCart);

router.get("/", authmiddleware, getCart);

router.put("/:id", authmiddleware, updateCart);



module.exports = router;