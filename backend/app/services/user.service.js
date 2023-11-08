const { ObjectId, MongoCryptInvalidArgumentError } = require("mongodb");


class UserService {
    constructor(client){
        this.user = client.db().collection("user")
    }
    extractUserData(payload){
        const user = {
            maTK: payload.maTK,
            tenUser: payload.tenUser,
            diachi: payload.diachi,
            sdt: payload.sdt,
        }

        Object.keys(user).forEach(
            (key) => user[key] === undefined && delete user[key]
        )
        
        return user;
    }
    async find(filter){
        const cursor = await this.user.find(filter)
        return await cursor.toArray()
    }
    async showAllUser(){
        try{
            const cursor = await this.user.find({})
            return await cursor.toArray()
        }catch(erorr){
            console.log(erorr)
        }
    }
    async getUserById(id){
        console.log(id)
        try{
            return await this.user.findOne({
                _id: ObjectId.isValid(id) ? new ObjectId(id): null,
            })
        }catch(erorr){
            console.log(erorr)
        }
    }
    async addUser(id,payload){
        try{
        const userdata= this.extractUserData(payload)
        const checkmaTK=  await this.user.findOne({
            maTK: id
        })
        if (checkmaTK) return "Tài khoản đã tồn tại"
            else {
                const result = await this.user.findOneAndUpdate(
                    userdata,
                    {$set: {maTK: id}},
                    { returnDocument: "after",upsert: true})
            return result
        }
        }catch(erorr){
            console.log(erorr)
        }
    }
    async updateUser(matk,payload){
        const filter = {
            maTK: matk
        }
        const update = this.extractUserData(payload)
        const result = await this.user.findOneAndUpdate(
            filter,
            { $set: update},
            { returnDocument: "after"}
        )
        return result;
    }
    async deleteUser(matk){
        const result = await this.user.findOneAndDelete({
            maTK: matk,
        })
        return result
    }
   
    
}

module.exports = UserService;