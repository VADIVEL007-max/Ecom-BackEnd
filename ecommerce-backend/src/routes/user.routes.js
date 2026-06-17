

const express = require("express");
const {newregister,userlogin }= require("../controllers/user.controller");

const router = express.Router();

router.post("/register",newregister)

router.post ("/login",userlogin)



module.exports = router;