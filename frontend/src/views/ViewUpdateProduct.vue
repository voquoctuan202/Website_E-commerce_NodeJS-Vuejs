<template>

    <NavAdmin></NavAdmin>
    <UpdateProduct :product="this.product" @submit="UpdatePro"></UpdateProduct>
</template>

<script>

    import NavAdmin from '../components/adminComponents/NavAdmin.vue';
    import productsService from '../services/products.service';
    import UpdateProduct from '../components/adminComponents/updateProduct.vue';
    export default{
        components:{
            NavAdmin,
            UpdateProduct,
        },
        data(){
            return{
                product: {}
            }
        },
        methods: {
         async UpdatePro(data){
           await productsService.UpdateProduct(data);
            this.$router.push('/admin')
         },
         getdata(){
            this.product = JSON.parse(localStorage.product)
            console.log(this.product)
         }
        },
        mounted(){
            this.getdata()
        }
}
</script>
