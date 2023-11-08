<template>


    <NavAdmin></NavAdmin>
    <AdPermission></AdPermission>
    <UsersAdmin></UsersAdmin>
</template>

<script>
    import AdPermission from '../components/adminComponents/AdPermisson.vue'
    import UsersAdmin from '../components/adminComponents/UsersAdmin.vue';
    import NavAdmin from '../components/adminComponents/NavAdmin.vue'
    export default{
        components:{
            NavAdmin,
            UsersAdmin,
            AdPermission
        }
}
</script>