<template>
    
    <div id="nav">
        <div id="logo">QT Mobile for Admin</div>
        
        <div id="btn_nav">
            
            <router-link :to="{ name: 'adminHome' }">
                <button><i class="fa fa-mobile" aria-hidden="true"></i> Xem sản phẩm</button>
            </router-link>
            <router-link :to="{ name: 'addProduct' }">
                <button><i class="fa fa-plus" aria-hidden="true"></i> Thêm sản phẩm</button>
            </router-link>
            <router-link :to="{ name: 'adminDonHang' }">
                <button><i class="fa fa-list" aria-hidden="true"></i> Quản lý đơn hàng</button>
            </router-link>
            <router-link :to="{ name: 'adminUser' }"  v-if="checkadmin()">
                <button><i class="fa fa-user" aria-hidden="true"></i> Quản lý tài khoản</button>
            </router-link>
            <router-link :to="{ name: 'login' }">
                <button><i class="fa fa-sign-out" aria-hidden="true"></i> Đăng xuất</button>
            </router-link>
              
      </div>
    </div>
   
</template>

<style>
#nav{
    background-color: rgb(255, 255, 255);
    height: 70px;
    display:flex;
    margin: 10px 10px 10px 10px;
    border-radius: 3px;
    
    box-shadow:1px 1px 1px 1px rgb(181, 181, 181);
}
#btn_nav{
  margin-right: 30px;
}
#btn_nav  button{
  margin: 20px 10px 20px 10px;
  padding: 5px;
  background-color: white;
  font-weight: 500;
  border: 2px solid rgba(246, 37, 37, 0);
  border-radius: 3px;
  box-shadow:1px 1px 1px 1px rgb(181, 181, 181);
  color: brown;
}

#logo{
    margin-right: auto;
    margin-left: 30px;
    margin-top: 15px;
    font-weight: 500;
    font-size: 20pt;
    color: brown;
}
.tieude{
    text-align: center;
    font-size: 25pt;
    font-weight: 700;
    color: brown;
    margin: 5px 0 5px 0;
}

</style>

<script>
export default{
    methods:{
        checkadmin(){
            const rule = localStorage.getItem('rule')
            if(rule=="admin"){
                return true
            }else{
                return false
            }
        }
    }
}
</script>