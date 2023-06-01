const {User} = require('../DB_connection');

const postUser = async (req,res)=>{
    try {
     const {email,password} = req.body;
     if(!email || !password)throw Error("Faltan datos")
     const newUser= await User.findOrCreate({where:{email,password}})
     return res.status(200).json(newUser)
 } catch (error) {
    if(error.message.includes("Faltan datos"))
      return res.status(400).send(error.message);
    return res.status(500).send(error.message)
 }
}
module.exports=postUser;