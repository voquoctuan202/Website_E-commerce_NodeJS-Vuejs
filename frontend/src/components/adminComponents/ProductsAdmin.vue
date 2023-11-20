<template>

    <div class="d-flex" >
      <div class="d-flex" id="xemhang">

        <table  id="table_xemhang">
          <tr >
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng còn lại</th>
            <th>Hình</th>
            <th>Xóa</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
              
                <th  @click="update(product)" >{{ product.tenHH }}</th>
                <th @click="update(product)" >{{ dinhDangSoTien(product.gia)}}</th>
                <th @click="update(product)" >{{ product.soLuong }}</th>
                <th @click="update(product)"><img class="img_hanghoa" :src="product.hinh" ></th>
              
              
              <th><i class="fa fa-times" aria-hidden="true" @click="del_product(product)"></i></th>
          </tr>
        </table>
          
      
      </div>
    </div>
  </template>
  
<style>



#xemhang{
    width: 95%;
    height: max-content;
    background-color:rgb(251, 251, 251);
    margin: auto;
    margin-top: 10px;
    padding: 5px ;
    border-radius: 3px;
    box-shadow:1px 1px 1px 2px rgb(181, 181, 181);
}
#table_xemhang{
  width: 100%;
  text-align: center;
}
.img_hanghoa{
    width: 100px;
    height: 100px;
    border: 1px solid black;
}


</style>

  <script>
  import productsService from '../../services/products.service'
  export default {
    data() {
      return {
        products: [],
      };
    },
    props:{
      products : {type: Array, default:[]}
    },
    emits:["delete:product"],
    methods: {
      async getall(){
        this.products = await productsService.showall()
      },

      dinhDangSoTien(soTien) {
         
         var chuoiSoTien = ""+soTien;
         var viTriDauCham = chuoiSoTien.indexOf('.');

         if (viTriDauCham === -1) {
           viTriDauCham = chuoiSoTien.length;
         }

         for (var i = viTriDauCham - 3; i > 0; i -= 3) {
           chuoiSoTien = chuoiSoTien.slice(0, i) + '.' + chuoiSoTien.slice(i);
         }

         chuoiSoTien += 'đ';

         return chuoiSoTien;
       },
      update(data){
        console.log("Cập nhật sản phẩm", data.maHH)
        localStorage.product = JSON.stringify(data)
        this.$router.push("/updateProduct")
      },
      async del_product(data){
        let choice = confirm("Xác nhận xóa sản phẩm");
        if (choice == true) {
            this.$emit("delete:product",data.maHH)
          
        }
        
      }

    },
  };
  </script>