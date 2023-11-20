
import createApiClient from "./api.service"

class UserService{
    constructor(baseUrl = "/api/user"){
        this.api = createApiClient(baseUrl)
    }
    async getAllUser(){
        return (await this.api.get("/showall")).data
    }
    async getUserByEmail(email){
        return (await this.api.get(`/getUserByEmail/${email}`)).data
    }
    async createUser(email){
        return await this.api.get(`/addUser/${email}`).data
    }
    async updateUser(id,data){
        return (await this.api.put(`/updateUser/${id}`,data)).data
    }
    async deleteUser(email){
        return await this.api.delete(`/deleteUser/${email}`).data
    }
}

export default new UserService()