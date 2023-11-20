<template>

    <Login
    :login="accountlogin"
    @submit:login="Login"
    ></Login>
</template>
<script>
import Login from "../components/Login.vue"
import accountsService from '../services/accounts.service';
export default{
    components:{
        Login
    },
    data() {
            return {
                accountlogin: {},
            };
        },
    methods:{
        async Login(data){
            try{
                //console.log(data.email)
                const kq = await accountsService.login(data.email,data.matkhau)
                console.log(kq)
                if(kq==true){
                    localStorage.setItem("email", data.email);
                    
                    const account = await accountsService.getAccountByEmail(data.email)
                    localStorage.setItem("rule",account.quyen)
                    if(account.quyen == "kh"){
                        this.$router.push({name: "home"})
                    }
                    if(account.quyen == "admin"){
                        this.$router.push({name: "adminHome"})
                    }
                    if(account.quyen == "nv"){
                        this.$router.push({name: "adminHome"})
                    }

                    
                }else{
                    window.alert("Sai email hoặc mật khẩu vui lòng nhập lại")
                }
            }catch(error){
                console.log(error)
            }
            
            
        }
    },
    created() {
            this.message = ""
        },

    
}
</script>