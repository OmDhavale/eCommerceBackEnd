const mongoose = require("mongoose");
//User fields: name, userID, password, usertype(customer or admin),email
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    userID : {
        type: String,
        required : true,
        unique : true
    },
    email: {
        type : String,
        required : true,
        lowercase : true,
        unique : true,
        minLength : 10
    },
    userType : {
        type : String,
        //required : false,
        default : "CUTSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    },
    password : {
        type : String,
        required : true
    }

},{timestamps : true, versionKey : false})

module.exports = mongoose.model("User",userSchema); //user collection of userSchema type

