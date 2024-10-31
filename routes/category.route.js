const categoryController = require("../controllers/category.controller")
const authMiddleware = require("../middlewares/auth.middleware.js")
module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories",[authMiddleware.verifyToken,authMiddleware.isAdminCheck],categoryController.createNewCategory)
}