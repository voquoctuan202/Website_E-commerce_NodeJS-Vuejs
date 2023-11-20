<template>
    
    <div class="nav">
        <div id="logo">QT Mobile</div>
        
        <div class="btn_nav">
            <router-link :to="{ name: 'home' }">
                <button><i class="fa fa-home" aria-hidden="true"></i> Trang chủ </button>
                
            </router-link>
        
            <router-link :to="{ name: 'product' }">
                <button><i class="fa fa-mobile" aria-hidden="true"></i> Sản phẩm</button>
            </router-link>
        
            <router-link :to="{ name: 'cart' }">
                <button><i class="fa fa-shopping-cart" aria-hidden="true"></i> Giỏ hàng</button>
            </router-link>
            <router-link :to="{ name: 'dsDonHang' }">
                <button v-if="this.email"><i class="fa fa-clock-o" aria-hidden="true"></i> Lịch sử mua hàng </button>
            </router-link>
            <router-link :to="{ name: 'user' }">
                <button v-if="this.email"><i class="fa fa-user" aria-hidden="true"></i> Tài khoản</button>
                <button v-else><i class="fa fa-user" aria-hidden="true"></i> Đăng nhập</button>
            </router-link>
              
      </div>
    </div>
   
</template>

<style>
.nav{
    background-color: rgb(255, 255, 255);
    height: 70px;
    display:flex;
    margin: 10px 10px 10px 10px;
    border-radius: 3px;
    box-shadow:1px 1px 1px 1px rgb(222, 222, 222); 
}
.btn_nav{
  margin-right: 30px;
}
.btn_nav  button{
  margin: 20px 10px 20px 10px;
  padding: 5px;
  background-color: white;
  font-weight: 500;
  border: 2px solid rgba(246, 37, 37, 0);
  border-radius: 3px;
  box-shadow:1px 1px 1px 1px rgb(222, 222, 222);
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
    margin: 5px 0px 5px 0;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;


}

</style>

<script>
export default{
    data() {
      return {
       email : localStorage.getItem("email")
      };
    },
}
</script>