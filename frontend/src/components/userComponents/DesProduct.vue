<template>
<div id="chitiet_sanpham" class="d-flex">
    <img id="img_chitiet" :src="this.product.hinh">
    <div id="noidung_chitiet">
        <div id="ten_ct">{{ this.product.tenHH }}</div>
        <div id="mota_ct" >{{ this.product.mota }}</div>
        <div class="sl"> <p>Số lượng: </p><input type="number" v-model="this.sl" ></div>
        <div id="gia_ct">{{ dinhDangSoTien(this.product.gia)   }}</div>
        <div id="btn_ct">
            <button class="btn btn-outline-danger" @click="quaylai()">Quay lại</button>
            <button class="btn btn-danger" @click="addcart(this.product,this.sl)">Thêm vào giỏ hàng</button>
        </div>
    </div>
</div>
</template>

<style>
#chitiet_sanpham{
    width: 60%;
    height: max-content;
    background-color:  rgb(255, 255, 255);
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-radius: 3px;
    box-shadow:1px 1px 1px 2px rgb(181, 181, 181);
}
#img_chitiet{
    width: 30%;
    height: 350px;
    margin: 10px 10px 10px 30px;
    border: 1px solid black;
    border-radius: 5px;
}
#ten_ct{
    font-size: 25pt;
    color: brown;
}
#gia_ct{
    font-size: 20pt;
    color: brown;
    font-weight: 700;
}

#btn_ct > button{
    margin: 10px;
}



</style>

<script>
import cartService from "../../services/cart.service";
import productsService from "../../services/products.service";
export default {
    props: {
        product: {type: Object, default: {}},
        
    },
    data(){
        return{
            sl: 0
        }
    },
    methods: {
        dinhDangSoTien(soTien) {
         var chuoiSoTien = ""+soTien
         var viTriDauCham = chuoiSoTien.indexOf('.')
         if (viTriDauCham === -1) {
           viTriDauCham = chuoiSoTien.length
         }
         for (var i = viTriDauCham - 3; i > 0; i -= 3) {
           chuoiSoTien = chuoiSoTien.slice(0, i) + '.' + chuoiSoTien.slice(i);
         }
         chuoiSoTien += 'đ'
         return chuoiSoTien;
       },
       async addcart(product,sl){
        if(!sl){
            sl=1
        }
        if(sl<0){
          window.alert("Số lượng không thể âm")

        }else{
            const DHHT =  await cartService.getCartDangMua(localStorage.getItem('email'))
            const RProduct = await productsService.showProductByMaHH(product.maHH)
            console.log()
            const fillter={

                maDH: DHHT._id,
                email: localStorage.getItem('email'),
                soluong:sl,
                maHH: product.maHH,
                giamgia:0
            }
            if(RProduct.soLuong > sl){
                if(!localStorage.getItem("email")){
                    window.alert("Mời bạn đăng nhập để có thể thêm sản phẩm vào giỏ") 
                }else{
                    console.log(fillter)
                    await cartService.add_product(fillter)
                    window.alert(`Đã thêm sản phẩm ${product.tenHH} số lượng ${sl} vào giỏ hàng` )
                }
                this.$router.push("/product")
            }else{
                window.alert(`Số lượng hàng hiện tại là ${RProduct.soLuong} \nChúng tôi không đủ số lượng bạn cần mua `)
            }
       
        }
        
       
       },
       quaylai(){
            this.$router.push('/product')
        }
      
      },
  };
</script>
