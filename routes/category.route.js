const categoryController = require("../controllers/category.controller")
const authMiddleware = require("../middlewares/auth.middleware.js")

module.exports = (app)=>{
    app.post("/create/categories",[authMiddleware.verifyToken,authMiddleware.isAdminCheck],categoryController.createNewCategory)
    app.get("/get/categories",categoryController.findAllCategory)
    app.delete("/delete/:name",[authMiddleware.verifyToken,authMiddleware.isAdminCheck],categoryController.deleteOneCategory)
}