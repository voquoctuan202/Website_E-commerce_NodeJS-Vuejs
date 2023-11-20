<template>

    <div >
        <div class="d-flex">
          <h2 class="tieude" style="margin-left: 42%; font-size: 23pt;">Danh sách đơn hàng</h2>
          <div class="btn_dhad">
            <button class="btn btn-outline-danger" @click="xemtatca()">Xem tất cả</button>
            <button class="btn btn-outline-danger" @click="xemdangduyet()">Đang duyệt</button>
            <button class="btn btn-outline-danger" @click="xemdaduyet()">Đã duyệt</button>
            <button class="btn btn-outline-danger" @click="xemdagiao()">Đã giao</button>
          </div>
        </div>
        
      <div class="d-flex xemhang">
        
        <table  id="table_xemdonhang">
          <tr>
            <th>Email</th>
            <th>Ngày đặt</th>
            <th>Ngày giao</th>
            <th>Mã hàng:Số lượng</th>
            <th>Tổng số lượng</th>
            <th>Thành tiền</th>
            <th>Email người duyệt</th>
            <th>Trạng thái</th>
            
            <th></th>
           
          </tr>
          <tr v-for="dh in dsdh" :key="dh.id" >
                <td v-if="dh.trangThai!='dangmua'">{{ dh.email }}</td>
                <td v-if="dh.trangThai!='dangmua'">{{ dh.ngayDat }}</td>
                <td v-if="dh.trangThai!='dangmua'">{{ dh.ngayGiao }}</td>
                <td v-if="dh.trangThai!='dangmua'" style="line-break: auto;">{{ this.render_HH(dh._id) }} </td>
                <td v-if="dh.trangThai!='dangmua'">{{ dh.soluong }}</td>
                <td v-if="dh.trangThai!='dangmua'">{{ dinhDangSoTien(dh.thanhtien)}}</td>
                <td v-if="dh.trangThai!='dangmua'">{{ dh.emailql }}</td>
                <td v-if="dh.trangThai!='dangmua'">{{ dh.trangThai }}</td>
                <td v-if="dh.trangThai!='dangmua'">
                <button v-if="dh.trangThai=='dangduyet'" class="btn btn-danger" @click="duyet(dh)">Duyệt</button>
                <button v-if="dh.trangThai=='daduyet'" class="btn btn-danger" @click="xacnhan(dh)">Đã giao</button>
                <p v-if="dh.trangThai=='dagiao'">Giao thành công</p>
                </td>
          </tr>
        </table>
          
      
      </div>
    </div>
  </template>
<style>
.xemhang{
    width: 95%;
    height: max-content;
    background-color:rgb(251, 251, 251);
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px ;
    border-radius: 3px;
    box-shadow:1px 1px 1px 2px rgb(181, 181, 181);
}
#table_xemdonhang{
  width: 100%;
  text-align: center;
}
.btn_dhad{
  margin-top: 17px;
  margin-left:9%;
}
.btn_dhad > button{
  margin-left: 3px;
}
</style>
<script>
import cartService from '../../services/cart.service';
export default {
    data() {
        return {

        };
    },
    props:{
        dsdh: {type: Array, default:[]},
        dshh: {type: Array, default:[]},
    },
    emits:["update:duyet","update:xacnhan","get:xemtatca","get:xemdanguyet","get:xemdaduyet","get:xemdagiao"],
    methods: {
        async duyet(dh){
            this.$emit("update:duyet",dh) 
        },
       async xacnhan(dh){
            this.$emit("update:xacnhan",dh)
            
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
       xemtatca(){
          this.$emit("get:xemtatca")
       }
       ,xemdangduyet(){
        this.$emit("get:xemdangduyet")
       }
       ,xemdaduyet(){
        this.$emit("get:xemdaduyet")
      }
      ,xemdagiao(){
        this.$emit("get:xemdagiao")
      }
      ,
       render_HH(id){
            var str = " "
            var i
            for(i=0;i<this.dshh.length;i++){
                if(this.dshh[i].maDH == id){
                    str =str +this.dshh[i].maHH + ':' + this.dshh[i].soluong + '\n'
                }
            }
          
            return str
        }
       
    },
   
};
</script>