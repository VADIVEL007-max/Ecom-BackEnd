

const express = require("express");
const newregister = require("../controllers/user.controller");

const router = express.Router();

router.post("/register",newregister)



module.exports = router;