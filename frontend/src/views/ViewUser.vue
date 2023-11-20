<template>
    <Nav></Nav>

    <User
    :user="this.user"
    @submit:updateUser="update"
    @submit:logoutUser="logout"
    
    ></User>
    <Footer></Footer>
</template>

<script>
import User from "../components/userComponents/User.vue"
import Nav from '../components/userComponents/NavUser.vue'
import Footer from '../components/userComponents/Footer.vue'
import userService from "../services/users.service"
export default{
    components:{
        User,
        Nav,
        Footer,
    },
    data() {
            return {
                user: {},
               
            };
        },
    methods:{
        logout(){
            localStorage.removeItem("email")
            localStorage.removeItem("tentk")
            this.$router.push({name: "login"})
        },
        checkLogin(){
            if(localStorage.getItem("email")==null){
                this.$router.push({name: "login"})
            }
            
        },
        async getAccountByEmail(){
            const email = localStorage.getItem("email");
            this.user = await userService.getUserByEmail(email)
            console.log(this.user);
        },

        async update(id,data){
           
            await userService.updateUser(id,data)
            window.alert("Cập nhật thành công")
        }
       

    },
    mounted(){
        this.getAccountByEmail();
        this.checkLogin();
       
    }

}
</script>