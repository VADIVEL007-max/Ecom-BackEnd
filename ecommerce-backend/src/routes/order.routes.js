const express = require("express");
const authmiddleware = require("../middleware/auth.middleware");
const { createOrder,getOrders,getSingleOrder } = require("../controllers/order.controller");

const router = express.Router();

router.post("/", authmiddleware, createOrder);

router.get("/", authmiddleware, getOrders);

router.get("/:id", authmiddleware, getSingleOrder);

module.exports = router;