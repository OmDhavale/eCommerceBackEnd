const signinAPIs = 'http://localhost:4444/signin'
//const signinAPIs = 'https://ecommercebackend-8lcw.onrender.com/signin'
const signupAPIs = 'http://localhost:4444/signup'
//const signupAPIs = 'https://ecommercebackend-8lcw.onrender.com/signup'
const getCategori = 'http://localhost:4444/get/categories'
//const getCategories = "https://ecommercebackend-8lcw.onrender.com/get/categories"
const signinAPI = ()=>{return signinAPIs}
const signupAPI = ()=>{return signupAPIs}
const getCategories = ()=>{return getCategori}
module.exports = {
    signinAPI : signinAPI,
    signupAPI: signupAPI,
    getCategories: getCategories
}