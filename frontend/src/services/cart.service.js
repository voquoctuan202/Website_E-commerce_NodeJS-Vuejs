import createApiClient from "./api.service"

class CartService{
    constructor(baseUrl = "/api/cart"){
        this.api = createApiClient(baseUrl)
    }
    async create_cart(data){
        console.log(data)
        return (await this.api.post("/create_cart/",data)).data
        
    }
    
    async add_product(data){
        return (await this.api.post("/add_product/",data)).data
    }
    
    
    async getAllCart(){
        return (await this.api.get("/getAllCart")).data
    }
    async getAllHHInCart(){
        return (await this.api.get("/getAllHHInCart")).data
    }
    async getDSHHByMaHH(maDH){
        return (await this.api.get(`/getDSHHByMaHH/${maDH}`)).data
    }
    async getCartByMaDH(maDH){
        return (await this.api.get(`/getCartByMaDH/${maDH}`)).data
    }
    async getDSDonHang(email){
        return (await this.api.get(`/getDSDonHang/${email}`)).data
    }
    async getCartDangMua(email){
        return (await this.api.get(`/getCartDangMua/${email}`)).data
    }
    async updateCart(id,data){
        return  await this.api.put(`/update_cart/${id}`,data).data
    }
    async getCartByEmail(email){
        return (await this.api.get(`/getCartByEmail/${email}`)).data
    }

    async deleteProduct(id){
        return (await this.api.delete(`/delete_product/${id}`)).data
    }
    async deleteProInCart(maDH){
        return (await this.api.delete(`/deleteProInCart/${maDH}`)).data
    }
    async deleteDH(maDH){
        return (await this.api.delete(`/deleteDH/${maDH}`)).data
    }
    


    
}

export default new CartService()