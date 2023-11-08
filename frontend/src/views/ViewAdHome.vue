<template>
    <NavAdmin></NavAdmin>
    <ProductsAdmin></ProductsAdmin>
</template>

<script>
    import ProductsAdmin from '../components/adminComponents/ProductsAdmin.vue';
    import NavAdmin from '../components/adminComponents/NavAdmin.vue'
    export default{
        components:{
            NavAdmin,
            ProductsAdmin,
        }
}
</script>
