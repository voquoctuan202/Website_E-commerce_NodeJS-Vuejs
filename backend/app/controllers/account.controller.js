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
        return document
    }catch (error){

        return next(
            new ApiError(500, "An error ocurred while creating the register")
        )
    }
}
exports.login = async (req, res, next)=>{
    try{
        const accountService = new AccountService(MongoDB.client)
        const document = await accountService.login(req.params.email,req.params.matkhau)
        return res.send(document)
    }catch (error){

        return next(
            new ApiError(500, "An error ocurred while creating the register")
        )
    }
    
}
exports.deleteAccount = async (req, res, next)=>{
    
    try{
        const accountService = new AccountService(MongoDB.client)
        const document = await accountService.deleteAccount(req.params.email)
        return res.send(document)
    }catch (error){
        return next(
            new ApiError(500, "An error ocurred while creating the register")
        )
    }
    
}
exports.getAccountByEmail = async (req, res, next)=>{
    try{
        const accountService = new AccountService(MongoDB.client)
        const document = await accountService.getAccountById(req.params.email)
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
exports.checkEmail = async (req, res, next)=>{
    try{
        const accountService = new AccountService(MongoDB.client)
        const document = await accountService.checkEmail(req.params.email)
        if (!document){
            return res.send("empty")
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