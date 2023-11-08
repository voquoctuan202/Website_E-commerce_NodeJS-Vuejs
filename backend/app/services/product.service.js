const { ObjectId } = require("mongodb");


class ProductService {
    constructor(client){
        this.hangHoa = client.db().collection("hanghoa")
    }
    extractHangHoaData(payload){
        const hangHoa = {
            maHH: payload.maHH,
            tenHH: payload.tenHH,
            moTa: payload.mota,
            loai: payload.loai,
            gia: payload.gia,
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
    async showProductById(id){
        return await this.hangHoa.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id): null,
        })
    }
    async deleteProduct(id){
        
        try{
            const result = await this.hangHoa.findOneAndDelete({
                _id: ObjectId.isValid(id) ? new ObjectId(id): null,
            })
            return result
        
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