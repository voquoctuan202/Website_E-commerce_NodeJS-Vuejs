import createApiClient from "./api.service"

class AccountsService{
    constructor(baseUrl = "/api/product"){
        this.api = createApiClient(baseUrl)
    }
    async showall(){
        return (await this.api.get("/showAllProduct")).data
        
    }
    async showProductByType(type){
        return (await this.api.get(`/showProductByType/${type}`)).data
    }
    async showProductByMaHH(maHH){
        return (await this.api.get(`/showProductByMaHH/${maHH}`)).data
    }
    async addProduct(data){
        return (await this.api.post("/addProduct",data)).data
    }
    async UpdateProduct(data){
        return await this.api.put("/updateProduct",data).data
    }
    async minusProduct(id,sl){
        return await this.api.put(`/minusProduct/${id}/${sl}`).data
    }
    async deleteProduct(maHH){
        return await this.api.delete(`/deleteProduct/${maHH}`).data
    }

}

export default new AccountsService()