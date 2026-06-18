const authmiddleware = require("../middleware/auth.middleware");
const {addToCart}= require("../controllers/cart.controller");
const express = require("express");


const router = express.Router();


router.post("/", authmiddleware, addToCart);



module.exports = router;