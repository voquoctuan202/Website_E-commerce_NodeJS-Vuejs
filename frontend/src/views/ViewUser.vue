<template>
    <Nav></Nav>

    <User
    :user="user"
    @submit:updateUser="update"
    @submit:logoutUser="logout"
    ></User>
    <Footer></Footer>
</template>

<script>
import User from "../components/userComponents/User.vue"
import Nav from '../components/userComponents/NavUser.vue'
import Footer from '../components/userComponents/Footer.vue'
export default{
    components:{
        User,
        Nav,
        Footer,
    },
    methods:{
        logout(){
            this.$router.push({name: "login"})
        }
        
    }

}
</script>