const {User} = require('../DB_connection');

const login = async(req,res) =>{
   try {
    const {email,password}= req.query;
    if(!email || !password) throw Error ("Faltan datos");
    const user = await User.findOne({where:{email}})
    if(!user) throw Error ("Usuario no encontrado");
    if(user.password!==password) throw Error("Contraseña incorrecta")
    return res.status(200).json({access:true})

   } catch (error) {
     if(error.message.includes("Faltan"))
     return res.status(400).send(error.message);
     if(error.message.includes("Usuario"))
     return res.status(404).send(error.message);
     if(error.message.includes("Contraseña"))
     return res.status(403).send(error.message);
     return res.status(500).send(error.message)
   }
}

module.exports= login

// const users = require("../utils/users")

// const login = (req, res)=>{
//   const {email,password} = req.query;
//   const userFound = users.find((user)=> user.email=== email &&
//    user.password=== password)
//    return userFound
//          ? res.status(200).json({access:true})
//          : res.status(404).json({access:false})
// }
// module.exports={
//     login
// };