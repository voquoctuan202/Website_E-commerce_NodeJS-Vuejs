<template>
    <Nav></Nav>
    <DesProduct :product="this.product" ></DesProduct>
    <Footer></Footer>

</template>

<script>

import Nav from '../components/userComponents/NavUser.vue'
import Footer from '../components/userComponents/Footer.vue'
import DesProduct from '../components/userComponents/DesProduct.vue';
import productsService from '../services/products.service';
export default{
    components:{
    Nav,
    Footer,
    DesProduct,
 
    },
    data(){
        return{
            maHH : localStorage.getItem("maHH"),
            product: {}
        }
    },
   
    methods:{
        async getProductByMaHH(maHH){
            this.product = await productsService.showProductByMaHH(maHH)
            console.log(this.product)
        }
    },
    mounted(){
        this.getProductByMaHH(this.maHH)
    }
 
    

}
</script>