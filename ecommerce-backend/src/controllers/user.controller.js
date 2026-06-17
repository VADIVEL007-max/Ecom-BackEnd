 
const prisma = require("../config/prisma");
const newuser = require("../services/user.service");



const newregister= async(req,res)=>{
    try {
        const {name,email,password}=req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ message: "All fields are required"});
}
        const registernew=await newuser({name,email,password});

        res.status(201).json({message:"new user added successfully...",data: registernew})
        console.log("new user added successfully...");
        
        
    } catch (error) {
         console.log(error);
        res.status(500).json({Message:"internal server error",error:error.message})  
    }
}


module.exports=newregister;