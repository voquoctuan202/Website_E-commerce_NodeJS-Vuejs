<template>

    <h1>
        Đây là trang chủ cho staff
    </h1>
    <NavStaff></NavStaff>
    <ProductsAdmin></ProductsAdmin>
</template>

<script>
    import ProductsAdmin from '../components/adminComponents/ProductsAdmin.vue';
    import NavStaff from '../components/staffComponents/NavStaff.vue'
    export default{
        components:{
            NavStaff,
            ProductsAdmin,
        }
}
</script>