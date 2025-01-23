// STARTING FILE OF THE PROJECT
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const server_config = require("./config/server.config.js")
const dbConfig = require("./config/db.config.js");
const userModel = require("./models/user.model.js");
const bcrypt = require("bcryptjs");
const cors = require("cors")

app.use(express.json())
require('dotenv').config();

// //frontend integration
// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your front-end origin
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
//     allowedHeaders: {
//         'Content-Type': 'application/json'
//     }, // Allowed headers
// }));
//
const corsOptions = {
    origin: 'http://localhost:3000',    ////for running locally
    //origin: 'https://ecommercefrontend-1.onrender.com', // Your frontend's URL for deployment
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));
// Allow all origins
//app.use(cors());

/*
Create an Admin user if not present already at the beginning
*/
mongoose.connect(process.env.MONGODB_URI) // for hoisting
//mongoose.connect("mongodb://localhost/eCommProjectdb") //for local running
const db  = mongoose.connection
db.on("error",()=>{
    console.log("Error while connecting to DB")
})
db.once("open",()=>{
    console.log("Connected to MongoDB")
    init()
})

async function init(){
    try{
        let user = await userModel.findOne({userID : "admin"})
        if(user){
            console.log("Admin already present")
            return 
        }

    }
    catch(err){
        console.log("Error reading data",err)
    }
    
    try{
        user = await userModel.create({
        name : "Om",
        userID : "admin",
        email : "dhavaleom@gmail.com",
        userType : "ADMIN",
        password : bcrypt.hashSync("namaste@44",8)
        })
        console.log("Admin created !",user)
    }
    catch{
        console.log("Error while creating admin")
    } 
}
/**
 * Stitch the route to the server
 */
require("./routes/auth.route.js")(app)
require("./routes/category.route.js")(app)
//START THE SERVER
//const PORT = process.env.PORT  //for hoisting
const PORT = 4444; //for local running
app.listen(PORT,()=>{
    console.log("Server is started on port: ",PORT);
})