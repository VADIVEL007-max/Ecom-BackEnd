const express = require("express");
const productroutes=require("./routes/product.routes");
const prisma = require("./config/prisma");
// const prisma=require("./config/prisma");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("API is working...");
});

// get api to fecth all product from db
app.use("/api/product", productroutes)

app.use("/api/product",productroutes)

app.use("/api/product",productroutes)

    
module.exports = app;