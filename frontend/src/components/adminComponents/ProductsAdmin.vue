<template>

    <div class="d-flex" >
      <div class="d-flex" id="xemhang">

        <table  id="table_xemhang">
          <tr >
            <th>Số thứ tự</th>
            <th>Tên sản phẩm</th>
            <th>Đơn giá</th>
            <th>Số lượng còn lại</th>
            <th>Hình</th>
            <th>Xóa</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
          
              <th>{{ product.id }}</th>
              <th>{{ product.name }}</th>
              <th>{{ product.price }}</th>
              <th>{{ product.sl }}</th>
              <th><img class="img_hanghoa" :src="product.img" ></th>
              <th><i class="fa fa-times" aria-hidden="true"></i></th>
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
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Iphone 15', price: 10, img:"/images/iphone.png", sl:10 },
          { id: 2, name: 'Samsung S23', price: 20, img: "/images/samsung.png" , sl:32},
          { id: 3, name: 'Product 3', price: 30, img: "" , sl: 23 },
        ],
      };
    },
    methods: {
      addToCart(product) {
        // Implement the cart functionality here
      },
    },
  };
  </script>