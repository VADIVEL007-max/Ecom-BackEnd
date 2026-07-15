const express = require("express");

const {toggleWishlist,getWishlist,} = require("../controllers/wishlist.controller");

const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, toggleWishlist);

router.get("/", authMiddleware, getWishlist);

module.exports = router;