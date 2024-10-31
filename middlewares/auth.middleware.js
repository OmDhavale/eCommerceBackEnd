const userModel = require("../models/user.model")
/**
 * Create a middleware which checks if the request body is fine or not
 */

const verifySignUpBody = async (req,res,next)=>{
    try{
        //Check for name,email,userID,password,userType
        if(!req.body.name){
            return res.status(400).send({
                message : "Failed, name was not provided !"
            })
        }
        if(!req.body.email){
            return res.status(400).send({
                message : "Failed, email was not provided !"
            })
        }
        if(!req.body.userID){
            return res.status(400).send({
                message : "Failed, userID was not provided !"
            })
        }
        if(!req.body.password){
            return res.status(400).send({
                message : "Failed, password was not provided !"
            })
        }
        //check whether user with same userID is present or not
        const flag = await userModel.findOne({userID : req.body.userID})
        if(flag){
            return res.status(400).send({
                message : "User with same UserID already present try again !"
            })
        }
        next()
    }
    catch(err){
        console.log("Error while validating the request object",err)
        res.status(500).send({
            message: "Error while validating request body"
        })
    }
    
}


const verifySignInBody = (req,res,next)=>{
    //if user id not present 
    if(!req.body.userID){
        return res.status(400).send({
            message : "User ID not provided !"
        })
    }
    if(!req.body.password){
        return res.status(400).send({
            message : "Password not provided !"
        })
    }
    next()
}

module.exports = {
    verifySignUpBody : verifySignUpBody,
    verifySignInBody : verifySignInBody
}