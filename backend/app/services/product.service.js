const { ObjectId } = require("mongodb");


class ProductService {
    constructor(client){
        this.hangHoa = client.db().collection("hanghoa")
    }
    extractHangHoaData(payload){
        const hangHoa = {
            maHH: payload.maHH,
            tenHH: payload.tenHH,
            mota: payload.mota,
            loai: payload.loai,
            gia: payload.gia,
            hinh: payload.hinh,
            soLuong: payload.soLuong
        }

        Object.keys(hangHoa).forEach(
            (key) => hangHoa[key] === undefined && delete hangHoa[key]
        )
        
        return hangHoa;
    }
    

    async showAllProduct(){
        try{
            const cursor = await this.hangHoa.find({})
            return await cursor.toArray()
        }catch(erorr){
            console.log(erorr)
        }
       
    }
    async showProductByType(type){
        try{
            return await this.find({loai: type})
        }catch(erorr){
            console.log(erorr)
        }
       
    }
    async showProductByMaHH(in_maHH){
        return await this.hangHoa.findOne({
            maHH: in_maHH
        })
    }
    async deleteProduct(in_maHH){
        
        try{
            const result = await this.hangHoa.findOneAndDelete({
                maHH: in_maHH,
            })
            return result
        
        }catch(erorr){
            console.log(erorr)
        }
    }
    async minusProduct(in_maHH,sl){
        const filter = {
           maHH: in_maHH
        }
        const sp = await this.showProductByMaHH(in_maHH)
        try{
            const result = await this.hangHoa.findOneAndUpdate(
                filter,
                { $set: {soLuong: sp.soLuong- sl}},
                { returnDocument: "after"}
            )
            return result;
        }catch(erorr){
            console.log(erorr)
        }
    }
    async updateProduct(data){
        const filter = {
           maHH: data.maHH
        }
        const productdata= this.extractHangHoaData(data)
        try{
            const result = await this.hangHoa.findOneAndUpdate(
                filter,
                { $set: productdata},
                { returnDocument: "after"}
            )
            return result;
        }catch(erorr){
            console.log(erorr)
        }
    }
    async addProduct(payload){
        
        try{
            const productdata= this.extractHangHoaData(payload)
            const checkmaHH =  await this.hangHoa.findOne({
            maHH: productdata.maHH
        })
        if (checkmaHH) return "Hàng đã tồn tại"
            else {
                const result = await this.hangHoa.findOneAndUpdate(
                    productdata,
                    {$set: {maHH: productdata.maHH}},
                    { returnDocument: "after",upsert: true})
            return result
        }
        }catch(erorr){
            console.log(erorr)
        }
    }

    async find(filter){
        const cursor = await this.hangHoa.find(filter)
        return await cursor.toArray()
    }
   
    
}

module.exports = ProductService;