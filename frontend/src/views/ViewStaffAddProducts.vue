<template>

    <NavStaff></NavStaff>
    <addProduct></addProduct>
</template>

<script>
    import addProduct from '../components/adminComponents/addProduct.vue';
    import NavStaff from '../components/staffComponents/NavStaff.vue'
    export default{
        components:{
            NavStaff,
            addProduct,
        }
}
</script>
