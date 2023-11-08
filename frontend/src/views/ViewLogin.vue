<template>

    <Login
    :login="login"
    @submit:login="Login"
    ></Login>
</template>
<script>
import Login from "../components/Login.vue"
export default{
    components:{
        Login
    },
    methods:{
        async Login(){
            this.$router.push({name: "home"})
        }
    }
    
}
</script>