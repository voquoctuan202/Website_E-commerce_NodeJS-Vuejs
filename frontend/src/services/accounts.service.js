import createApiClient from "./api.service"

class AccountsService{
    constructor(baseUrl = "/api/account"){
        this.api = createApiClient(baseUrl)
    }
    async login(data){
        return (await this.api.post("/login"),data).data
    }
    async register(data){
        console.log(data)
        //return await this.api.post("/",data).data
    }
}

export default new AccountsService()