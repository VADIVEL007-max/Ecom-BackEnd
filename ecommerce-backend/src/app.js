const express = require("express");
const productroutes=require("./routes/product.routes");
const userroutes=require("./routes/user.routes");
const categoryroutes=require("./routes/category.routes")
const cartroutes =require("./routes/cart.routes")
const prisma = require("./config/prisma");

// const prisma=require("./config/prisma");

const app = express();

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

app.use("/api/cart",cartroutes)

    
module.exports = app;