

const express = require("express");
const {newregister,userlogin, getProfile }= require("../controllers/user.controller");
const authmiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.post("/register",newregister)

router.post ("/login",userlogin)
// this is test for the authmiddleware  purpose only
router.get( "/test", authmiddleware,(req, res) => {
        res.status(200).json({
            message: "Access granted",
            user: req.user
        });
    }
);
router.get("/profile",authmiddleware, getProfile);


module.exports = router;