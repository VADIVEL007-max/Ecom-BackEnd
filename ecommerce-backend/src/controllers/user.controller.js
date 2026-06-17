const {findUserByEmail,newuser} = require("../services/user.service");
const bcrypt = require("bcrypt");


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


module.exports=newregister;