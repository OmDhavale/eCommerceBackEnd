/**
 * Controller for creating the category
 * POST localhost:4444/ecomm/api/v1/categories
 * 
 * {
 *  name : "Category name",
 *  description : "This will have all household items"
 * }
 */

const categoryModel = require("../models/category.model")

exports.createNewCategory= async (req,res)=>{
    //Read request body
    const requestbody = req.body
    //create category object
    const categoryObj = {
        name : requestbody.name,
        description : requestbody.description
    }
    //insert in MongoDB
    try{
        const createdCatobj = await categoryModel.create(categoryObj)
        //return the response of created category
        return res.status(200).send({
            message : "Category created",
            createdCatobj
        })
    }
    catch(err){
        console.log("Error creating category object")
        return res.status(500).send({
            message : "Error while creating category"
        })
    }
}