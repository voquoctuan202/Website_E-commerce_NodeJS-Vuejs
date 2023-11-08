<template>
    <div>
      <h2 class="tieude">Giỏ hàng</h2>
      <div  id="giohang">
        <table  id="table_giohang">
          <tr >
            <th>Số thứ tự</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xóa</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
          
              <th>{{ product.id }}</th>
              <th>{{ product.name }}</th>
              <th>{{ product.price }}</th>
              <th>{{ product.sl }}</th>
              <th>{{ product.price * product.sl }}</th>
              <th><i class="fa fa-times" aria-hidden="true"></i></th>
         
          </tr>
        </table>
        
      </div>
    <div id="cart_total">
        <div>Tổng số lượng:</div>
        <div>Tổng tiền:</div>
        <div>Giảm giá:</div>
        <div id="btn_cart">
          <button class="btn btn-danger">Thanh toán</button>
          <button class="btn btn-outline-danger">Hủy</button>
        </div>
        
    </div>

     
    </div>
  </template>
<style>
#giohang{
    width: 95%;
    height: max-content;
    background-color:rgb(251, 251, 251);
    margin: auto;
    margin-top: 10px;
    padding: 5px ;
    border-radius: 3px;
    box-shadow:1px 1px 1px 2px rgb(181, 181, 181);
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
  background-color:rgb(251, 251, 251);
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px ;
  border-radius: 3px;
  box-shadow:1px 1px 1px 2px rgb(181, 181, 181);
}
#btn_cart{
  text-align: center;
}
#btn_cart > button{
  margin: 3px;
}
</style>



  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Iphone 15', price: 10, img:"/images/iphone.png", sl: 1},
          { id: 2, name: 'Samsung S23', price: 20, img: "/images/samsung.png" , sl: 2},
          { id: 3, name: 'Product 3', price: 30, img: "" ,sl: 2 },
        ],
      };
    },
    computed: {
      cart() {
        // Implement cart retrieval logic here
        return [];
      },
      cartTotal() {
        
        return 100 ;
      },
    },

    methods: {
      removeFromCart(product) {
        // Implement cart removal logic here
      },
    },
  };
  </script>