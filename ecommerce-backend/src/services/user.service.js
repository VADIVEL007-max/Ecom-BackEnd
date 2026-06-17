

const prisma = require("../config/prisma");



// check the email is alread exsits
const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email:email
    }
  });
};
// 
const newuser=async(userdata)=>{
    return await prisma.user.create({
         data: userdata       
        })
}

module.exports={newuser,findUserByEmail};