<template>

    <NavAdmin></NavAdmin>
    <updateUserAd :user="this.user"></updateUserAd>
   
</template>

<script>
    import updateUserAd from '../components/adminComponents/updateUserAd.vue';
    import NavAdmin from '../components/adminComponents/NavAdmin.vue';
    import productsService from '../services/products.service';
    export default{
        components:{
            NavAdmin,
            updateUserAd,
        },
        data(){
            return{
                user: {}
            }
        },
        methods: {
            async updateUser(data){
                try{
                    console.log(data.maHH)
                    await productsService.showProductByMaHH(data.maHH)
                    window.alert("Mã hàng đã tồn tại")
                }catch(error){
                await productsService.addProduct(data)
                window.alert("Thêm thành công")
                
                }
            
            },
            getdata(){
            this.user = JSON.parse(localStorage.user)
            
         }
            
        },
        mounted(){
            this.getdata()
        }
}
</script>
