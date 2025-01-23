While deploying webapp u need to change following things

1. server.js

cors part{
    origin: 'http://localhost:3000',    ////for running locally
    origin: 'https://ecommercefrontend-1.onrender.com', // Your frontend's URL for deployment
}

mongoose.connect(process.env.MONGODB_URI) // for hoisting live
mongoose.connect("mongodb://localhost/eCommProjectdb") //for local running

//START THE SERVER
const PORT = process.env.PORT  //for hoisting
const PORT = 4444; //for local running

2. in LogSignIn.js

axios.post('https://ecommercebackend-8lcw.onrender.com/signup',{name,userID,email,password,userType}) //type here "keys" as mentioned in API one capslock can also result into error, also sequence must be same !
axios.post('https://localhost:4444/signup',{name,userID,email,password,userType}) //for local running

3. for Login.js

similar as above