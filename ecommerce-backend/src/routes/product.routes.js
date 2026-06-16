// const app = require("../app");
const {getproduct,getproductbyid, addnewproduct} = require("../controllers/product.controller");
// const app=require("./app")
const express = require("express");


const router = express.Router();

router.get("/",getproduct)

router.get("/:id",getproductbyid)

router.post("/",addnewproduct)


module.exports = router;