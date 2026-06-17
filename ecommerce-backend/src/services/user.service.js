

const prisma = require("../config/prisma");

const newuser=async(userdata)=>{
    return await prisma.user.create({
         data: userdata       
        })
}

module.exports=newuser;