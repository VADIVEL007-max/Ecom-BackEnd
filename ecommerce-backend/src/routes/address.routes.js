const express = require("express");
const router = express.Router();

const authmiddleware = require("../middleware/auth.middleware");

const {
  addAddress,
  getAllAddresses,
  updateUserAddress,
  removeAddress,
} = require("../controllers/address.controller");

// Create Address
router.post("/", authmiddleware, addAddress);

// Get All Addresses
router.get("/", authmiddleware, getAllAddresses);

// Update Address
router.put("/:id", authmiddleware, updateUserAddress);

// Delete Address
router.delete("/:id", authmiddleware, removeAddress);

module.exports = router;