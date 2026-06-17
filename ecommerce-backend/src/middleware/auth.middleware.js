const jwt = require("jsonwebtoken");

// JWT Authentication Middleware

const authmiddleware=(req,res,next)=>{
    try {
 
        const authHeader=req.headers.authorization;// Get authorization header from request

 
        if(!authHeader){
            return res.status(401).json({message:"tocken is required"});// Check token exists or not
        }

        const tocken = authHeader.split(" ")[1];// Extract token from "Bearer <token>"

 
        jwt.verify(tocken, 'ecom-temp', function(err,decoded){// Verify token using secret key
    
         if(!err){// Token valid

            req.user = decoded; // Store decoded user data in request

            next(); // Move to next middleware/controller
         }
         else{ 
            res.status(401).send("tocken is Invalid....")// Token invalid or expired
         }
         });

    } catch (error) { // Internal server error
        console.log(error);
        return res.status(500).json({ message:"Internal server error"});

        
        
    }
}



module.exports = authmiddleware;