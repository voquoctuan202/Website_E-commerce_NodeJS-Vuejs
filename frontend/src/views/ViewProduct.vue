<template>
    <Nav></Nav>
    <h2 id="tieude_sp">SẢN PHẨM</h2>
    <div class="d-flex">
        <MenuProduct></MenuProduct>
        <Product></Product>
    </div>
    <Footer></Footer>
    
</template>
<style>
#tieude_sp{
    text-align: center;
    font-size: 25pt;
    font-weight: 700;
    color: brown;
}
</style>
<script>
import Product from "../components/userComponents/Products.vue"
import Nav from '../components/userComponents/NavUser.vue'
import MenuProduct from '../components/userComponents/MenuProduct.vue'
import Footer from '../components/userComponents/Footer.vue'
export default{
    components:{
        Product,
        Nav,
        MenuProduct,
        Footer
    }
}
</script>