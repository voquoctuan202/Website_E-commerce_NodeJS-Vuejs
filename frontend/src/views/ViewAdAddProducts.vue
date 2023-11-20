<template>

    <NavAdmin></NavAdmin>
    <addProduct @submit="addProduct"></addProduct>
</template>

<script>
    import addProduct from '../components/adminComponents/addProduct.vue';
    import NavAdmin from '../components/adminComponents/NavAdmin.vue';
    import productsService from '../services/products.service';
    export default{
        components:{
            NavAdmin,
            addProduct,
        },
        data(){
            return{
                product:{}
            }
        },
        methods: {
         async addProduct(data){
            try{
                console.log(data.maHH)
                await productsService.showProductByMaHH(data.maHH)
                window.alert("Mã hàng đã tồn tại")
            }catch(error){
               await productsService.addProduct(data)
               window.alert("Thêm thành công")
              
            }
         },
         checkAdmin(){
            
            if(localStorage.getItem("rule")== "kh"){
                this.$router.push("/login")
            }else{
                
            }
        },
        },mounted(){
            this.checkAdmin()
        }
}
</script>
