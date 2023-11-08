const { ObjectId } = require("mongodb");


class CartService {
    constructor(client){
        this.DonHang = client.db().collection("donhang")
        this.chitietDH = client.db().collection("chitietdonhang")
    }
    extractDonHangData(payload){
        const DatHang = {
            maKH: payload.maKH,
            ngayDat: payload.ngaydat,
            ngayGiao: payload.ngaygiao,
            trangThai: payload.trangthai
        }

        Object.keys(DatHang).forEach(
            (key) => DatHang[key] === undefined && delete DatHang[key]
        )
        
        return DatHang;
    }
    extractChitietDHData(payload){
        const chitietDH = {
            maDH: payload.maDH,
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
            cartData,
            {$set: {maKH: payload.maKH}},
            { returnDocument: "after",upsert: true}
        )
        return result
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
    async add_product(id,payload){
        const product= this.extractChitietDHData(payload)
        const result =  await this.chitietDH.findOneAndUpdate(
            product,
            {$set: {maDH:id}},
            { returnDocument: "after",upsert: true}
        )
        return result
    }
    async delete_product(id){
        const result = await this.chitietDH.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id): null,
        })
        return result
    }

    
}

module.exports = CartService;