<template>

    <div >
       
        <h2 class="tieude" style="font-size:20pt;">Danh sách User</h2>
      <div class="d-flex xemhang">
        
        <table  id="table_xemhang">
          <tr >
            <th>Tên người dùng</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Nghề nghiệp</th>
            <th>Xóa</th>
          </tr>
          <tr v-for="user in users" :key="user.id">
              <td @click="updateUser(user)">{{ user.tenUser }}</td>
              <td @click="updateUser(user)">{{ user.gioitinh}}</td>
              <td @click="updateUser(user)">{{ user.ngaysinh}}</td>
              <td @click="updateUser(user)">{{ user.diachi }}</td>
              <td @click="updateUser(user)">{{ user.sdt}}</td>
              <td @click="updateUser(user)">{{ user.email }}</td>
              <td @click="updateUser(user)">{{ user.nghenghiep }}</td>
              <td @click="deleteUser(user)"><i class="fa fa-times" aria-hidden="true"></i></td>
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
import usersService from '../../services/users.service';
import cartService from '../../services/cart.service';
export default {
    data() {
        return {

        };
    },
    props:{
        users: {type: Array, default:[]}
    },
    emits:["delete:userByEmail"],
    methods: {
      updateUser(user){
        console.log("update",user)
        localStorage.user = JSON.stringify(user)
        this.$router.push("/updateUser")
      },
      async deleteUser(user){
        const checkDH = await cartService.getCartByEmail(user.email)
        if(checkDH[0]== undefined){
          let choice = confirm(`Xác nhận xóa user có ${user.email} này`);
          if (choice == true) {
            this.$emit("delete:userByEmail",user.email)
          }
        }else{
          window.alert("Tài khoản có đơn hàng, không thể xóa")
        }

      }
    },
};
</script>