<template>

    <div class="d-flex" id="product">
      
      
      <div class="row m-1 " >
        <div v-for="product in products" :key="product.id" class="item_product col-lg-3 col-md-5 col-sm-12" >
          <router-link :to="'/des'">
            <img class="img_product" :src="product.img" alt="">
          </router-link>
            <div >
                <div class="name">{{ product.name }}</div>
                <div class="chi_tiet">{{ product.des }}</div>
                <div class="gia">Giá: {{ product.price }}đ</div>
                
            </div>
            <div class="btn_add_cart">
              <button @click="addToCart(product)" class="btn btn-outline-danger ">Thêm <i><i class="fa fa-cart-plus" aria-hidden="true"></i></i></button>
            </div>
            
      
          
        </div>
      </div>
    </div>
  </template>
  
<style>



#product{
  width: 97%;
  height: max-content;
  background-color: rgb(255, 255, 255) ;
  
  margin: 10px;
  margin-top: 0;

  border-radius: 3px;
  box-shadow:1px 1px 1px 2px rgb(216, 216, 216);
  

}
.item_product{
  width: max-content;
  margin: 10px;
  padding: 9px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 1px 1px 1px 1px rgb(216, 216, 216);
}

.name{
  text-decoration: none;
  font-weight: 600;
  font-size: 20pt;
  color: black;
  background-color: white;
  
  
}

.img_product{
  width: 200px;
  height: 250px;
  border-radius: 5px;
  background-color: aqua;

}
.btn_add_cart{
  text-align: center;
}



</style>

  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Iphone 15', price: 10, img:"/images/iphone.png", des: "Đây là iphone" },
          { id: 2, name: 'Samsung S23', price: 20, img: "/images/samsung.png" , des: "Đây là samsung"},
          { id: 3, name: 'Product 3', price: 30, img: "" , des: "Đây là samsung" },
          { id: 1, name: 'Iphone 15', price: 10, img:"/images/iphone.png", des: "Đây là iphone" },
          { id: 2, name: 'Samsung S23', price: 20, img: "/images/samsung.png" , des: "Đây là samsung"},
          { id: 3, name: 'Product 3', price: 30, img: "" , des: "Đây là samsung" },
          { id: 1, name: 'Iphone 15', price: 10, img:"/images/iphone.png", des: "Đây là iphone" },
          { id: 2, name: 'Samsung S23', price: 20, img: "/images/samsung.png" , des: "Đây là samsung"},
          { id: 3, name: 'Product 3', price: 30, img: "" , des: "Đây là samsung" },
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