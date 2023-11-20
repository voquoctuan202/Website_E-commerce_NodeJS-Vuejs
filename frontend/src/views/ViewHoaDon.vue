<template>
    <Nav></Nav>
 
    <HoaDon :products="this.products" :user="this.user" :tien="this.tien"></HoaDon>
    <Footer></Footer>

</template>

<script>
import Nav from '../components/userComponents/NavUser.vue'
import Footer from '../components/userComponents/Footer.vue'
import HoaDon from '../components/userComponents/HoaDon.vue'
import cartService from "../services/cart.service"
import productsService from "../services/products.service"
export default{
    components:{
        Nav,
        Footer,
        HoaDon
    },
    data() {
        return {
            products: [],
            user: {},
            tien:{},
        };
    },
    methods:{
        getdata(){
            this.products = JSON.parse(localStorage.product)
            this.user = JSON.parse(localStorage.user)
            this.tien = JSON.parse(localStorage.tien)
        }
       

    },
    mounted(){
        this.getdata()
    }
}
</script>