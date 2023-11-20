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
        if (checkemail) return "0"
            else {
                const result = await this.account.findOneAndUpdate(
                    accountdata,
                    {$set: {quyen: "kh"}},
                    { returnDocument: "after",upsert: true})
            return result
        }
        
    }
    async login(mail,pass){
      
        const checktk =  await this.account.findOne({
            email: mail,
            matkhau: pass
        })
        if (checktk) return "true"
            else return "false"
    }
    async deleteAccount(in_email){
        try{
            const result = await this.account.findOneAndDelete({
                email: in_email
            })
            return result
        }catch(erorr){
            console.log(erorr)
        }      
    }
    async getAccountByEmail(in_email){
        return await this.account.findOne({
            email: in_email,
        })
    }
    async checkEmail(Email){
        return await this.account.findOne({
           email : Email
        })
    }
    
}

module.exports = AccountService;