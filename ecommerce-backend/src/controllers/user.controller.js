const {findUserByEmail,newuser,findEmail} = require("../services/user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// add a new user in db
const newregister= async(req,res)=>{
    // get the all data using body so use destructure method
    try {
        const {name,email,password}=req.body;
    //    now checkt any feild is empty and sendd responces
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required"});
        };

        const existingUser = await findUserByEmail(email);
    // user exsit send error message
        if (existingUser) {
                return res.status(400).json({ message: "Email already exists" });
        };

     // hash the pass  using the bycrpt
        const hashedPassword = await bcrypt.hash(password, 10);

    //  now we send the data to service to acces so their name but pass is bycrypt pass //note this you make a mistake
        const registernew=await newuser({name,email,password:hashedPassword});

    //dont need to send the sensitive datato frontend so get thhe pass then pack other userdata  using the spread operator
        const {  password: dbPassword, ...userWithoutPassword } = registernew;

        res.status(201).json({message:"new user added successfully...",data: userWithoutPassword})
        console.log("new user added successfully...");     

        
    } catch (error) {
         console.log(error);
        res.status(500).json({Message:"internal server error",error:error.message})  
    }
}

// login the user
const userlogin=async(req,res)=>{

    try {
    // Get email and password from request body
        const {email,password}=req.body;

    // Check required fields
         if (!email || !password) {
            return res.status(400).json({ message: "All fields are required"});
        };

    // Check user exists using email
        const existingUser = await findUserByEmail(email);

    // If user not found, ask to create account
       if (!existingUser) {
         return res.status(400).json({message: "Please create an account first"});
        }

     // Compare entered password with hashed password in DB
        const isMatch = await bcrypt.compare(password,existingUser.password);

    // Password incorrect  
        if (!isMatch) {
             return res.status(400).json({ message: "Invalid password"});
         }

    // this code is create a temp tocken for the user when user login...
         const tocken = jwt.sign({ id: existingUser.id, email: existingUser.email},  "", { expiresIn: "1d"}
        );

    // Remove password before sending response
        const {password: dbPassword, ...userWithoutPassword}= existingUser;
        
     // Login success response
        res.status(200).json({message: "login successful",tocken,data: userWithoutPassword});

    } catch (error) {
        console.log(error);
        res.status(500).json({Message:"internal server error",error:error.message})  
    }

}


module.exports={userlogin,newregister};