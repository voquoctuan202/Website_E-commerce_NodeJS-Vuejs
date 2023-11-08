const ApiError = require("../api-error")
const CartService = require("../services/cart.service")
const MongoDB = require("../utils/mongodb.util")

exports.add_product = async (req, res, next)=>{
    if(!req.body?.maHH){
        return next(new ApiError(400, "Name can not be empty"))
    }

    try{
        const cartService = new CartService(MongoDB.client)
        const document = await cartService.add_product(req.params.maDH,req.body)
        
        return res.send(document)
    }catch (error){
        return next(
            new ApiError(500, "An error ocurred while creating the cart")
        )
    }
}
exports.delete_product = async (req, res, next)=>{
    try{
        const cartService = new CartService(MongoDB.client)
        const document = await cartService.delete_product(req.params.id)
        if(!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send({message: "Contact was deleted successfully"})
    }catch(error){
        return next(
            new ApiError(
                500,
                `Could not delete contact with id=${req.params.id}`
            )
        )
    }
    
}
exports.create_cart = async (req, res, next)=>{
    if(!req.body?.maKH){
        return next(new ApiError(400, "Name can not be empty"))
    }

    try{
        const cartService = new CartService(MongoDB.client)
        const document = await cartService.create_cart(req.body)
        
        return res.send(document)
    }catch (error){
        return next(
            new ApiError(500, "An error ocurred while creating the contact")
        )
    }
}
exports.update_cart = async (req, res, next)=>{
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Data to update can not be empty "))
    }
    try{
        const cartService = new CartService(MongoDB.client)
        const document = await cartService.update_cart(req.params.id, req.body)
        if(!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send({message: "Contact was update successfully"})
    }catch(error){
        return next(
            new ApiError(500, `Error updating contact with id=${req.params.id}`)
        )
    }
}