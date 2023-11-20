const { ObjectId, MongoCryptInvalidArgumentError } = require("mongodb");


class UserService {
    constructor(client){
        this.user = client.db().collection("user")
    }
    extractUserData(payload){
        const user = {
            email: payload.email,
            tenUser: payload.tenUser,
            diachi: payload.diachi,
            sdt: payload.sdt,
            gioitinh: payload.gioitinh,
            ngaysinh: payload.ngaysinh,
            nghenghiep: payload.nghenghiep
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
    async getUserByEmail(in_email){
   
        try{
            return await this.user.findOne({
                email: in_email,
            })
        }catch(erorr){
            console.log(erorr)
        }
    }
    async addUser(in_email){
        try{
        const payload={
            maTK: "",
            tenUser: "",
            diachi: "",
            sdt: ""
        }
        const userdata= this.extractUserData(payload)
        const checkmaTK=  await this.user.findOne({
            email: in_email
        })
        if (checkmaTK) return "Tài khoản đã tồn tại"
            else {
                const result = await this.user.findOneAndUpdate(
                    userdata,
                    {$set: {email: in_email}},
                    { returnDocument: "after",upsert: true})
            return result
        }
        }catch(erorr){
            console.log(erorr)
        }
    }
    async updateUser(id,payload){
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id): null,
        }
        const update = this.extractUserData(payload)
        try{
            const result = await this.user.findOneAndUpdate(
                filter,
                { $set: update},
                { returnDocument: "after"}
            )
            return result;
        }catch(erorr){
            console.log(erorr)
        }
        
    }
    async deleteUser(in_email){
        const result = await this.user.findOneAndDelete({
            email: in_email,
        })
        return result
    }
   
    
}

module.exports = UserService;