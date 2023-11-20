<template>
<div class="hoadon">
    <div class="tieude">Hóa đơn</div>
    <div class="tthd d-flex"  >
      <div style="margin-right: 47%;">
        <div>Email: {{ this.user.email  }}</div>
        <div>Địa chỉ: {{ this.user.diachi }}</div>
        <div>Số điện thoại: {{ this.user.sdt }}</div>
      </div>
      <div>
        <div>Ngày đặt: {{ layNgayThangNamHienTai() }}</div>
        <div>Ngày giao dự kiến: 4-7 ngày</div>
        <div>Phương thức thanh toán: {{ loaithanhtoan(this.user.pttt) }}</div>
      </div>
      
      
    </div>
    
    <div  id="dshang">
        <table  id="table_dshang">
          <tr>
           
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
          <tr v-for="product in products" :key="product.id">   
              <td>{{ getTenHHByMa(product.maHH) }} </td>
              <td>{{ dinhDangSoTien(getGiaHHByMa(product.maHH)) }}</td>
              <td>{{ product.soluong }}</td>
              <td>{{ product.soluong * getGiaHHByMa(product.maHH)}}</td>

          </tr>
        </table>
        
      </div>
      <div id="cart_total" style="font-size: 20px;">
        <div>Tổng số lượng: {{ this.tien.tongsoluong }}</div>
        <div>Tổng tiền: {{dinhDangSoTien(this.tien.tongsotien)}} </div>
        <div>Giảm giá: {{ this.xulygiamgia() }} %</div>
        <div>Thành tiền: {{ dinhDangSoTien(this.xulythanhtien(this.tien.tongsotien) )  }}</div>
        
    </div>
    <div style="text-align: center;">
      <button class="btn btn-danger" @click="xacnhan()">Xác nhận</button>
      <button class="btn btn-outline-danger" @click="huy()">Hủy</button>
    </div>
</div>
</template>
<style>
    #dshang{
        width: 95%;
        height: max-content;
        background-color:rgb(255, 255, 255);
        margin: auto;
        margin-top: 10px;
        padding: 5px ;
        border-radius: 3px;
        box-shadow:1px 1px 1px 1px rgb(222, 222, 222);
    }
    #table_dshang{
    width: 100%;
    text-align: center;
    font-size: 20px;
    }
    .tthd{
      margin-left: 3%;
      font-size: 20px;
    }
    .hoadon{
      margin-left: 10%;
      margin-right: 10%;
    }
</style>



<script>
  import productsService from '../../services/products.service';
  import cartService from '../../services/cart.service';
  export default {
    props: {
        products: {type: Array, default: []},
        user: {type: Object, default: {}},
        tien: {type: Object, default: {}},
    },
    data() {
      return {
        CTProduct:[]
      };
    }, 
    emits:{
    },
    methods: {
        async getAllInfoProduct(){
          this.CTProduct = await productsService.showall()
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
        dinhDangSoTien(soTien) {
         var chuoiSoTien = ""+soTien
         var viTriDauCham = chuoiSoTien.indexOf('.')

         if (viTriDauCham === -1) {
            viTriDauCham = chuoiSoTien.length;}

         for (var i = viTriDauCham - 3; i > 0; i -= 3) {
           chuoiSoTien = chuoiSoTien.slice(0, i) + '.' + chuoiSoTien.slice(i);}
         chuoiSoTien += 'đ';

         return chuoiSoTien;

       },
        xulygiamgia(){
            
            const sl = this.tien.tongsoluong
            if(sl==0){return 0;}
            if(sl<2){return 3;}
            if(sl<=5){return 5}
            if(sl<=8){return 8;}
            return 10;
        },
        xulythanhtien(){
            const giamgia = this.xulygiamgia()
            const thanhtien = this.tien.tongsotien
            console.log(`${giamgia}  ${thanhtien} `)
            return thanhtien - (thanhtien*giamgia/100)
        },
        loaithanhtoan(s){
            switch(s){
              case "tienmat": return "Tiền mặt"
              case "nganhang": return "Ngân hàng"
              default: return "Trả góp"
            }
        },
        layNgayThangNamHienTai() {
           
            var ngayHienTai = new Date();
            var ngay = ngayHienTai.getDate();
            var thang = ngayHienTai.getMonth() + 1;
            var nam = ngayHienTai.getFullYear();

            ngay = ngay < 10 ? '0' + ngay : ngay;
            thang = thang < 10 ? '0' + thang : thang;
            var chuoiNgayThangNam = ngay + '/' + thang + '/' + nam;
            return chuoiNgayThangNam;
        },
        async xacnhan(){
          console.log(this.products)
          var maDHHT
          for(var i in this.products){
            maDHHT = this.products[i].maDH
            await productsService.minusProduct(this.products[i].maHH,this.products[i].soluong)
          }
          
            const cartupdate={
                  maDH: maDHHT,
                  email : this.user.email,
                  ngaydat: this.layNgayThangNamHienTai() ,
                  ngaygiao:"",
                  trangThai:"dangduyet",
                  soluong: this.tien.tongsoluong,
                  giamgia: this.xulygiamgia(this.tien.soluong),
                  thanhtien: this.xulythanhtien(this.tien.tongsotien)
              }
              await cartService.updateCart(maDHHT,cartupdate)
              const newcart={
                  email: this.user.email,
                  ngayDat:"",
                  ngayGiao:"",                
                  trangThai:"dangmua"
              }
              await cartService.create_cart(newcart)
              window.alert("Đặt hàng thành công")
              this.$router.push("/dsDonHang")
        },
        huy(){
           this.$router.push("/cart")
        }
            
    },
      
    mounted(){
     this.getAllInfoProduct()
    }
    
  };
</script>