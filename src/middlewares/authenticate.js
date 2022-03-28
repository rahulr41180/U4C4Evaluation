
require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (token) =>
{
    return new Promise((resolve, reject) =>
    {
        var decoded = jwt.verify(token,process.env.JWT_SECRET_KEY, (error, decoded) =>
        {
            if(error)
            {
                return reject(error);
            }
            return resolve(decoded);
        })
    })
}

const authenticate = async(req,res,next) =>
{

    if(!req.headers.authorization)
    {
        return res.status(500).send({message : "Authorization token found or incorrect"});
    }
    if(!req.headers.authorization.startsWith("Bearer"))
    {
        return res.status(500).send({message  : "Authorization token found or incorrect"});
    }
    const token = req.headers.authorization.trim().split(" ")[1];

    let decoded;
    try
    {
        decoded = await verifyToken(token);
    }
    catch(error)
    {
        return res.status(500).send({message : error.message});
    }

    req.User2 = docoded.User;

    return next();
}



module.exports = authenticate;