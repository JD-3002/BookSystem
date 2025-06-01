require("dotenv").config();
const jwt = require("jsonwebtoken")


module.exports=(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decode;
        next();
    }catch(error){
 res.sendStatus(403);
    }



}