<script>
import Home from '../components/userComponents/Home.vue';
import Product from "../components/userComponents/Products.vue"
import Nav from '../components/userComponents/NavUser.vue'
import Footer from '../components/userComponents/Footer.vue';
export default {
  components: {
      Home,
      Product,
      Nav,
      Footer
  },

}

</script>

<template>
    <Nav></Nav>
    <Home></Home>
    <div id="product_h">
      <Product></Product>
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