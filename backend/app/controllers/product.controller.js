const ApiError = require("../api-error")
const ProductService = require("../services/product.service")
const MongoDB = require("../utils/mongodb.util")

exports.showAllProduct = async (req, res, next)=>{
    try{
        
        const productService = new ProductService(MongoDB.client)
        const documents = await productService.showAllProduct()
        return res.send(documents)
    }catch(error){
        return next(
            new ApiError(
                500,
                "An error occurred while retrieving favorite contacts"
            )
        )
    }
    
}
exports.showProductByType = async (req, res, next)=>{
    try{
        const productService = new ProductService(MongoDB.client)
        
        const document = await productService.showProductByType(req.params.type)
        if (!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send(document)
    }catch(error){
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.type}`
            )
        )
    }
    
}
exports.showProductById = async (req, res, next)=>{
    try{
        const productService = new ProductService(MongoDB.client)
        const document = await productService.showProductById(req.params.id)
        if (!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send(document)
    }catch(error){
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.id}`
            )
        )
    }
    
}
exports.deleteProduct = async(req, res, next)=>{
    try{
        const productService = new ProductService(MongoDB.client)
        const document = await productService.deleteProduct(req.params.id)
        if(!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send({message: "Product was deleted successfully"})
    }catch(error){
        return next(
            new ApiError(
                500,
                `Could not delete contact with id=${req.params.id}`
            )
        )
    }
    
}
exports.addProduct = async(req, res, next)=>{
    if(!req.body?.maHH){
        return next(new ApiError(400, "Name can not be empty"))
    }

    try{
        const productService = new ProductService(MongoDB.client)
        const document = await productService.addProduct(req.body)
        
        return res.send(document)
    }catch (error){
        return next(
            new ApiError(500, "An error ocurred while creating the contact")
        )
    }
    
}