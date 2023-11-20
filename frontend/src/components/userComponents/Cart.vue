<template>
    <div>
      <h2 class="tieude">Giỏ hàng</h2>
      <div  id="giohang">
        <table  id="table_giohang">
          <tr>
            <th>Hình</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xóa</th>
          </tr>
          <tr v-for="product in products" :key="product.id" style="">   
              <td><img :src="getImgHHByMa(product.maHH)" class="img_cart">  </td>
              <td>{{ getTenHHByMa(product.maHH) }} </td>
              <td>{{ dinhDangSoTien(getGiaHHByMa(product.maHH))  }}</td>
              <td>{{ product.soluong }}</td>
              <td>{{ dinhDangSoTien(product.soluong * getGiaHHByMa(product.maHH))}}</td>
              <td><i class="fa fa-times" aria-hidden="true" @click="this.removeFromCart(product)"></i></td>

          </tr>
        </table>
        
      </div>

    <div class="info_cart">
      <Form
      :validation-schema="cartFormSchema">
        <div class="form-group">
            <label for="phone">Số điện thoại</label>
                <Field
                    name="phone"
                    type="text"
                    class="form-control"
                    v-model="this.user.sdt"
                />
                <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
                <Field
                    name="address"
                    type="text"
                    class="form-control"
                    v-model="this.user.diachi"
                />
                <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
                <Field
                    name="email"
                    type="email"
                    class="form-control"
                    v-model="this.user.email"
                />
                <ErrorMessage name="job" class="error-feedback" />
        </div>
        <div>
          <label for="typepay" id="pttt">Phương thức thanh toán:</label>
              <select name="typepay" id="typepay" v-model="pttt">
                <option value="tienmat">Tiền mặt</option>
                <option value="nganhang">Ngân hàng</option>
                <option value="tragop">Trả góp</option>
                
              </select>
        </div>
      </Form> 
    </div>  
    <div id="cart_total">
        <div>Tổng số lượng: {{ this.tongsoluong }}</div>
        <div>Tổng tiền: {{ dinhDangSoTien( this.tongsotien) }} </div>
        <div>Giảm giá: {{ this.xulygiamgia() }} %</div>
        <div>Thành tiền: {{ dinhDangSoTien(this.xulythanhtien())  }}</div>
        <div id="btn_cart">
          <button class="btn btn-danger" @click="thanhtoan()">Thanh toán</button>
          <button class="btn btn-outline-danger" @click="muathem()">Mua thêm</button>
        </div>
        
    </div>

    
    </div>

  </template>
<style>
body{
  background-color: rgb(247, 247, 247);
}
#giohang{
    width: 95%;
    height: max-content;
    background-color:rgb(255, 255, 255);
    margin: auto;
    margin-top: 10px;
    padding: 5px ;
    border-radius: 3px;
    box-shadow:1px 1px 1px 1px rgb(222, 222, 222);
}
.item_giohang{
  background-color: aqua;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 15pt;
 
}
#table_giohang{
  width: 100%;
  text-align: center;
}
#cart_total{
  width: 50%;
  height: max-content;
  background-color:rgb(255, 255, 255);
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px ;
  border-radius: 3px;
  box-shadow:1px 1px 1px 1px rgb(222, 222, 222);
}
#btn_cart{
  text-align: center;
}
#btn_cart > button{
  margin: 3px;
}
.info_cart{
  width: 50%;
 
  background-color:rgb(255, 255, 255);
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px ;
  border-radius: 3px;
  box-shadow:1px 1px 1px 1px rgb(222, 222, 222);
}
#pttt{
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 30px;
}
.img_cart{
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
}
</style>

<script>
  import * as yup from "yup";
  import { Form, Field, ErrorMessage } from "vee-validate";
  import productsService from '../../services/products.service';
  import usersService from "../../services/users.service";
  export default {
    props: {
        products: {type: Array, default: []},
        tongsoluong: {type: Number, default: 0},
        tongsotien: {type: Number, default: 0},
         
    },
    data() {
      const cartFormSchema = yup.object().shape({
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            
        });
      return {
        user: {},
        pttt:"tienmat",
        giamgia: this.xulygiamgia(),
        thanhtien: this.xulythanhtien()

      };
    },
    components:{
        Form,
        Field,
        ErrorMessage,
    },
    
    emits:{
      emits: ["delete:removeformcart","update:thanhtoan"],
    },
    methods: {
      thanhtoan(){
      
        const user ={
          sdt: this.user.sdt,
          diachi: this.user.diachi,
          email: this.user.email,
          pttt: this.pttt
        }
        const tien={
          tongsoluong : this.tongsoluong,
          tongsotien: this.tongsotien,
          giamgia: this.giamgia,
          thanhtien: this.thanhtien

        }
        if(user.sdt==""||user.diachi==""||user.email==""){
          window.alert("Vui lòng điền đầy đủ email, số điện thoại, địa chỉ")
        }else{
          this.$emit("update:thanhtoan",this.products,user,tien)
        }
        
  
      },
      removeFromCart(product) {
        this.$emit("delete:removeformcart",product)
      },
      getTenHHByMa(maHH){
          var i
          for(i in this.CTProduct){
            // console.log(this.CTProduct[i].tenHH)
            if(maHH == this.CTProduct[i].maHH){
              return this.CTProduct[i].tenHH
            }
          }   
      },
      getGiaHHByMa(maHH){
          var i
          for(i in this.CTProduct){
            if(maHH == this.CTProduct[i].maHH){
              return this.CTProduct[i].gia
            }
          }   
      },
      getImgHHByMa(maHH){
          var i
          for(i in this.CTProduct){
            if(maHH == this.CTProduct[i].maHH){
              return this.CTProduct[i].hinh
            }
          }   
      },
      async getAllInfoProduct(){
          this.CTProduct = await productsService.showall()
          

      },
      async getUserByEmail(email){
        this.user = await usersService.getUserByEmail(email)
      },
      dinhDangSoTien(soTien) {
         
         var chuoiSoTien = ""+soTien
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
      xulygiamgia(){
        const sl = this.tongsoluong
        
        if(sl==0){return 0;}
        if(sl<2){return 3;}
        if(sl<=5){return 5}
        if(sl<=8){return 8;}
        return 10;
      },
      xulythanhtien(){
        const giamgia = this.xulygiamgia()
        const thanhtien = this.tongsotien
        console.log(`${giamgia}  ${thanhtien} `)
        return thanhtien - (thanhtien*giamgia/100)
      },
      muathem(){
        this.$router.push("/product")
      }
      
      },
      
    mounted(){
      this.getAllInfoProduct()
      this.getUserByEmail(localStorage.getItem("email"))
    }
    
  };
  </script>