<template>

    <NavAdmin></NavAdmin>
    <addProduct></addProduct>
</template>

<script>
    import addProduct from '../components/adminComponents/addProduct.vue';
    import NavAdmin from '../components/adminComponents/NavAdmin.vue'
    export default{
        components:{
            NavAdmin,
            addProduct,
        }
}
</script>
