
import createApiClient from "./api.service"

class AccountsService{
    constructor(baseUrl = "/api/account"){
        this.api = createApiClient(baseUrl)
    }
    async login(email,matkhau){
        try{
            return (await this.api.get(`/login/${email}/${matkhau}`)).data
        }catch(erorr){
            console.log(erorr)
        }
        
    }
    async register(data){
        return await this.api.post("/register",data).data
    }
    async getAccountByEmail(email){
        return (await this.api.get(`/getEmail/${email}`)).data
    }
    async deleteAccountByEmail(email){
        return await this.api.delete(`/deleteAccount/${email}`).data
    }
}

export default new AccountsService()