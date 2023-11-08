<template>
    <Nav></Nav>
 
    <Cart></Cart>
    <Footer></Footer>
</template>

<script>
import Cart from "../components/userComponents/Cart.vue"
import Nav from '../components/userComponents/NavUser.vue'
import Footer from '../components/userComponents/Footer.vue'
export default{
    components:{
        Cart,
        Nav,
        Footer
    }
}
</script>