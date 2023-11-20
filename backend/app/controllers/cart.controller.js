const ApiError = require("../api-error")
const CartService = require("../services/cart.service")
const MongoDB = require("../utils/mongodb.util")


exports.getAllCart = async (req, res, next)=>{
    try{
        
        const cartService = new CartService(MongoDB.client)
        const documents = await cartService.getAllCart()
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
exports.getAllHHInCart = async (req, res, next)=>{
    try{
        
        const cartService = new CartService(MongoDB.client)
        const documents = await cartService.getAllHHInCart()
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
exports.getDSHHByMaHH = async (req, res, next)=>{
    try{
        
        const cartService = new CartService(MongoDB.client)
        const documents = await cartService.getDSHHByMaHH(req.params.maDH)
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
exports.add_product = async (req, res, next)=>{
    if(!req.body?.maHH){
        return next(new ApiError(400, "Name can not be empty"))
    }

    try{
        const cartService = new CartService(MongoDB.client)
        const document = await cartService.add_product(req.body)
        
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
exports.deleteDH = async (req, res, next)=>{
    try{
        
        const cartService = new CartService(MongoDB.client)
        const document = await cartService.deleteDH(req.params.maDH)
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
exports.deleteProInCart= async (req, res, next)=>{
    try{
        console.log(req.params.maDH)
        const cartService = new CartService(MongoDB.client)
        const document = await cartService.deleteProInCart(req.params.maDH)
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
exports.getCartByMaDH = async (req, res, next)=>{
    try{
        const cartService = new CartService(MongoDB.client)
        
        const document = await cartService.getCartByMaDH(req.params.maDH)
        if (!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send(document)
    }catch(error){
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.email}`
            )
        )
    }
    
}
exports.getCartByEmail = async (req, res, next)=>{
    try{
        const cartService = new CartService(MongoDB.client)
        
        const document = await cartService.getCartByEmail(req.params.email)
        if (!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send(document)
    }catch(error){
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.email}`
            )
        )
    }
    
}
exports.getCartDangMua= async (req, res, next)=>{
    try{
        const cartService = new CartService(MongoDB.client)
        
        const document = await cartService.getCartDangMua(req.params.email)
        if (!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send(document)
    }catch(error){
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.email}`
            )
        )
    }
    
}
exports.getDSDonHang= async (req, res, next)=>{
    try{
        const cartService = new CartService(MongoDB.client)
        
        const document = await cartService.getDSDonHang(req.params.email)
        if (!document){
            return next(new ApiError(404, "Contact not found"))
        }
        return res.send(document)
    }catch(error){
        return next(
            new ApiError(
                500,
                `Error retrieving contact with id=${req.params.email}`
            )
        )
    }
    
}
exports.create_cart = async (req, res, next)=>{
    
    if(!req.body?.email){
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