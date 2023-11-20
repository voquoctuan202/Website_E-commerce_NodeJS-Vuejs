<template>

    <div >
       
        <h2 class="tieude" style="font-size:20pt;">Danh sách đơn hàng</h2>
      <div class="d-flex xemhang">
        
        <table  id="table_xemdonhang">
          <tr >
  
            <th>Ngày đặt</th>
            <th>Ngày giao</th>
           
            <th>Số lượng</th>
            <th>Giảm giá</th>
            <th>Thành tiền</th>
            <th>Trạng thái</th>
            <th>Hủy</th>
           
          </tr>
          <tr v-for="dh in dsdh" :key="dh.id" >
    
              <td v-if="dh.trangThai!='dangmua'">{{ dh.ngayDat }}</td>
              <td v-if="dh.trangThai!='dangmua'">{{ dh.ngayGiao }}</td>
              <td v-if="dh.trangThai!='dangmua'">{{ dh.soluong }}</td>
              <td v-if="dh.trangThai!='dangmua'">{{ dh.giamgia}}</td>
              <td v-if="dh.trangThai!='dangmua'">{{ dinhDangSoTien(dh.thanhtien)}}</td>
              <td v-if="dh.trangThai!='dangmua'">{{ dh.trangThai }}</td>
              <td v-if="dh.trangThai!='dangmua'">
                <i class="fa fa-times" aria-hidden="true" 
                    v-if="checkTrangthai(dh.trangThai)" 
                    @click="deleteDH(dh)"></i></td>
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
       
    },
    emits:["delete:donhang"],
    methods: {
        checkTrangthai(tt){
            if(tt=="dangduyet"){
                return true
            }else{
                return false
            }
        },
        async deleteDH(dh){
            this.$emit("delete:donhang",dh)
           
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
    
    },
};
</script>