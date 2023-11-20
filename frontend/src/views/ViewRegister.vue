<template>

    <Register
    :account="account"
    @submit:register="register"
    ></Register>
</template>

<script>
import Register from '../components/Register.vue'
import accountsService from '../services/accounts.service';
import usersService from '../services/users.service';
import cartService from '../services/cart.service'
export default{
    components:{
        Register,
    },
    data() {
            return {
                account:{},
               
            };
        },
    methods: {
        async getAccountByEmail(){
            return await accountsService.getAccountByEmail(data.email)
        },
        async register(data) {
            try {
                if(data.matkhau !== data.xnmatkhau){
                    window.alert("Mật khẩu xác nhận không trùng khớp")
                }else{
                    try {
                        const account = await accountsService.getAccountByEmail(data.email)
                        console.log(account)
                        if(account != "empty"){
                            window.alert("Email đã tồn tại, vui lòng nhập email khác")
                        }else{
                            await accountsService.register(data)
                            await usersService.createUser(data.email)

                            const cart={
                                email : data.email,
                                ngaydat: "",
                                ngaygiao:"",
                                trangThai:"dangmua"
                            }

                            await cartService.create_cart(cart)
                            localStorage.setItem("email",data.email)
                            this.$router.push({name : "home"})
                            
                        }
                    } catch (error) {
                        
                        console.log(error)
                    }
                    
                }
                
            } catch (error) {
                
                console.log("chạy catch")
                console.log(error)
        }
        },
        },
        created() {
            this.message = ""
        },

}
</script>