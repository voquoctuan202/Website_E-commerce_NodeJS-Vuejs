const { ObjectId } = require("mongodb");


class CartService {

    constructor(client){
        this.DonHang = client.db().collection("donhang")
        this.chitietDH = client.db().collection("chitietdonhang")
    }
    extractDonHangData(payload){
        const DatHang = {
            email: payload.email,
            ngayDat: payload.ngaydat,
            ngayGiao: payload.ngayGiao,
            trangThai: payload.trangThai,
            soluong: payload.soluong,
            thanhtien: payload.thanhtien,
            giamgia: payload.giamgia,
            emailql: payload.emailql
        }

        Object.keys(DatHang).forEach(
            (key) => DatHang[key] === undefined && delete DatHang[key]
        )
        
        return DatHang;
    }
    extractChitietDHData(payload){
        const chitietDH = {
            maDH :payload.maDH,
            email: payload.email,
            maHH: payload.maHH,
            soluong: payload.soluong,
            giamgia: payload.giamgia
        }

        
        Object.keys(chitietDH).forEach(
            (key) => chitietDH[key] === undefined && delete chitietDH[key]
        )
        return chitietDH;
    }


    async create_cart(payload){
        const cartData= this.extractDonHangData(payload)
        const result =  await this.DonHang.findOneAndUpdate(
            {email: "ktontai"},
            {$set: cartData},
            { returnDocument: "after",upsert: true}
        )
        return result
    }
    async getAllCart(){
        try{
            const cursor = await this.DonHang.find({})
            return await cursor.toArray()
        }catch(erorr){
            console.log(erorr)
        }
    }
    async getAllHHInCart(){
        try{
            const cursor = await this.chitietDH.find({})
            return await cursor.toArray()
        }catch(erorr){
            console.log(erorr)
        }
    }
    async getDSHHByMaHH(in_maDH){
        try{
            const cursor = await this.DonHang.find({maDH: in_maDH})
            return await cursor.toArray()
        }catch(erorr){
            console.log(erorr)
        }
    }
    async getCartByMaDH(in_maDH){
        try{
            return await this.find({maDH: in_maDH})
        }catch(erorr){
            console.log(erorr)
        }
    }
    async getCartByEmail(in_email){
        try{
            return await this.find({email: in_email})
        }catch(erorr){
            console.log(erorr)
        }
    }
    async getDSDonHang(in_email){
        try{
            return await this.find2({email: in_email})
        }catch(erorr){
            console.log(erorr)
        }
    }
    async getCartDangMua(in_email){
        try{
            return await this.DonHang.findOne({email: in_email, trangThai: "dangmua"})
        }catch(erorr){
            console.log(erorr)
        }
    }
    async find(filter){
        const cursor = await this.chitietDH.find(filter)
        return await cursor.toArray()
    }
    async find2(filter){
        const cursor = await this.DonHang.find(filter)
        return await cursor.toArray()
    }
    async update_cart(id,payload){
       
        try{
            const filter = {
                _id: ObjectId.isValid(id) ? new ObjectId(id):null,
            }
            const update = this.extractDonHangData(payload)
            const result = await this.DonHang.findOneAndUpdate(
                filter,
                { $set: update},
                { returnDocument: "after"}
            )
            return result;
        }catch(erorr){
            console.log(erorr)
        }
    }
   
    async add_product(payload){
        const product= this.extractChitietDHData(payload)
        
        const hh = await this.chitietDH.findOne({
            maDH: product.maDH,
            maHH: product.maHH,
            email: product.email
            })
        if(hh!=null){

            const result =  await this.chitietDH.findOneAndUpdate(
                {maHH : product.maHH},
                {$set: {soluong: product.soluong+ hh.soluong}},
                { returnDocument: "after",upsert: true}
                )
            return result
        }else{
            const result =  await this.chitietDH.findOneAndUpdate(
                {maHH : product.maHH},
                {$set: product},
                { returnDocument: "after",upsert: true}
                )
            return result
        }
        
    }
    async delete_product(id){
        const result = await this.chitietDH.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id): null,
        })
        return result
    }
    async deleteDH(in_maDH){
        const result = await this.DonHang.findOneAndDelete({
            _id: ObjectId.isValid(in_maDH) ? new ObjectId(in_maDH): null,
        })
        return result
    }
    async deleteProInCart(in_maDH){
        const result = await this.chitietDH.findOneAndDelete({
            maDH: in_maDH,
        })
        return result
    }


    
}

module.exports = CartService;