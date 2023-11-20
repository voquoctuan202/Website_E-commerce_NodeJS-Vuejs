const ApiError = require("../api-error")
const UserService = require("../services/user.service")
const MongoDB = require("../utils/mongodb.util")

exports.showAllUser = async (req, res, next)=>{
    try{
        
        const userService = new UserService(MongoDB.client)
        const documents = await userService.showAllUser()
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
exports.getUserById = async(req, res, next)=>{
    try{
        const userService = new UserService(MongoDB.client)
        const document = await userService.getUserById(req.params.id)
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
exports.getUserByEmail = async(req, res, next)=>{
    try{
        const userService = new UserService(MongoDB.client)
        const document = await userService.getUserByEmail(req.params.email)
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
exports.addUser = async(req, res, next)=>{
    if(!req.params.email){
       
        return next(new ApiError(400, "ID can not be empty"))
    }

    try{
        const userService = new UserService(MongoDB.client)
        const document = await userService.addUser(req.params.email)
        
        return res.send(document)
    }catch (error){
        return next(
            new ApiError(500, "An error ocurred while creating the contact")
        )
    }
    
}
exports.updateUser = async(req, res, next)=>{
    
    if(Object.keys(req.body).length === 0){
        return next(new ApiError(400, "Data to update can not be empty "))
    }
    try{
        const userService = new UserService(MongoDB.client)
        const document = await userService.updateUser(req.params.id, req.body)
        if(!document){
            return next(new ApiError(404, "Not found"))
        }
        return res.send({message: "Contact was update successfully"})
    }catch(error){
        return next(
            new ApiError(500, `Error updating contact with id=${req.params.id}`)
        )
    }
    
}
exports.deleteUser = async(req, res, next)=>{
    try{
        const userService = new UserService(MongoDB.client)
        const document = await userService.deleteUser(req.params.email)
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