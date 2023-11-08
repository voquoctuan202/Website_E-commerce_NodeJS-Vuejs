const ApiError = require("../api-error")
const AccountService = require("../services/account.service")
const MongoDB = require("../utils/mongodb.util")

exports.register = async (req, res, next)=>{
    if(!req.body?.tentk){
        return next(new ApiError(400, "Name can not be empty"))
    }
    try{
        const accountService = new AccountService(MongoDB.client)
        const document = await accountService.register(req.body)
        return res.send(document)
    }catch (error){

        return next(
            new ApiError(500, "An error ocurred while creating the register")
        )
    }
}
exports.login = async (req, res, next)=>{
    if(!req.body?.email){
        return next(new ApiError(400, "Email can not be empty"))
    }
    try{
        const accountService = new AccountService(MongoDB.client)
        const document = await accountService.login(req.body)
        return res.send(document)
    }catch (error){

        return next(
            new ApiError(500, "An error ocurred while creating the register")
        )
    }
    
}
exports.deleteAccount = async (req, res, next)=>{
    if(!req.body?.email){
        return next(new ApiError(400, "Email can not be empty"))
    }
    try{
        const accountService = new AccountService(MongoDB.client)
        const document = await accountService.deleteAccount(req.body)
        return res.send(document)
    }catch (error){

        return next(
            new ApiError(500, "An error ocurred while creating the register")
        )
    }
    
}
exports.getAccountById = async (req, res, next)=>{
    try{
        const accountService = new AccountService(MongoDB.client)
        const document = await accountService.getAccountById(req.params.id)
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