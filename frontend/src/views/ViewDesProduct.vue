<template>
    <Nav></Nav>
 
    <DesProduct></DesProduct>
    <Footer></Footer>
</template>

<script>

import Nav from '../components/userComponents/NavUser.vue'
import Footer from '../components/userComponents/Footer.vue'
import DesProduct from '../components/userComponents/DesProduct.vue';
export default{
    components:{
    Nav,
    Footer,
    DesProduct
}
}
</script>