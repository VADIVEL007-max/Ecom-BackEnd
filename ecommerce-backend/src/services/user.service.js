
const prisma = require("../config/prisma");



// check the email is alread exsits("register api and also login api use the function to find the exmil is exsits")
// don't create a new finduserby emial use the this
const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email:email
    }
  });
};


// register api if email is not exsits this is  create a new user
const newuser=async(userdata)=>{
    return await prisma.user.create({
         data: userdata       
        })
}

// Find User By Id
const findUserById = async (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};


module.exports={newuser,findUserByEmail,findUserById};