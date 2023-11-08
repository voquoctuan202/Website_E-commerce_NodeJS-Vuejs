const { ObjectId } = require("mongodb");

class AccountService {
    constructor(client){
        this.account = client.db().collection("taikhoan")
    }
    extractAccountData(payload){
        const account = {
            tentk: payload.tentk,
            email: payload.email,
            matkhau: payload.matkhau,
            quyen: payload.quyen
        }

        Object.keys(account).forEach(
            (key) => account[key] === undefined && delete account[key]
        )
        return account;
    }

    async register(payload){
        const accountdata= this.extractAccountData(payload)
        const checkemail =  await this.account.findOne({
            email: accountdata.email
        })
        if (checkemail) return "Tk đã tồn tại"
            else {
                const result = await this.account.findOneAndUpdate(
                    accountdata,
                    {$set: {quyen: "kh"}},
                    { returnDocument: "after",upsert: true})
            return result
        }
        
    }
    async login(payload){
        const accountdata= this.extractAccountData(payload)
        const checktk =  await this.account.findOne({
            email: accountdata.email,
            matkhau: accountdata.matkhau
        })
        if (checktk) return "đăng nhập ok"
            else return "Sai tk or mk"
    }
    async deleteAccount(payload){
        const accountdata= this.extractAccountData(payload)
       
        try{
            const result = await this.account.findOneAndDelete({
                email: accountdata.email
            })
            return "Xóa thành công"
        }catch(erorr){
            console.log(erorr)
        }      
    }
    async getAccountById(id){
        return await this.account.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id): null,
        })
    }
    
}

module.exports = AccountService;