const express = require("express");
const prisma = require("./config/prisma");
const cors = require("cors");

const productroutes=require("./routes/product.routes");
const userroutes=require("./routes/user.routes");
const categoryroutes=require("./routes/category.routes")
const cartroutes =require("./routes/cart.routes")
const orderRoute = require("./routes/order.routes");
const addressRoutes = require("./routes/address.routes");



// const prisma=require("./config/prisma");

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is working...");
});

// Product APIs
app.use("/api/product", productroutes)

// User APIs
app.use("/api/user",userroutes)

// categoryroutes APIs
app.use("/api/category", categoryroutes)

// this is cart routes
app.use("/api/cart",cartroutes)

//  this is order routes
app.use("/api/orders", orderRoute);
// Address APIs
app.use("/api/address",addressRoutes);



    
module.exports = app;