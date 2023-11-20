<script>
import Home from '../components/userComponents/Home.vue';
import Product from "../components/userComponents/Products.vue"
import Nav from '../components/userComponents/NavUser.vue';
import Footer from '../components/userComponents/Footer.vue';
import productsService from '../services/products.service';
export default {
  components: {
      Home,
      Product,
      Nav,
      Footer
  },
  data() {
    return {
        products: [],
        
    };
  },
  methods: {
    async showAllHome() {
        try {
            this.products = await productsService.showProductByType("SS");
        } catch (error) {
            console.log(error);
        }
    },
    async addcart(product,sl) {
          if(!sl){
              sl=1
          }
          const fillter={
              email: localStorage.getItem('email'),
              soluong:sl,
              maHH: product.maHH,
              giamgia:0
          }
          if(!localStorage.getItem("email")){
              window.alert("Mời bạn đăng nhập để có thể thêm sản phẩm vào giỏ") 
          }else{
              await cartService.add_product(fillter)
              window.alert(`Đã thêm sản phẩm ${product.tenHH} số lượng ${sl} vào giỏ hàng` )
          }
          
          
          
      },

   
  },
  mounted() {
      this.showAllHome();
     
  },

}

</script>

<template>
    <Nav></Nav>
    <Home></Home>
    <div id="product_h">
      <Product :products= "this.products"
      @update:addcart="addcart"
      ></Product>
    </div>
    
    <Footer></Footer>
</template>
<style>
#product_h{
    width: 84%;
    height: max-content;
    margin: auto;
    margin-top: 10px;
    padding-bottom: 10px;

    
}
</style>