<template>

    <Register
    :account="account"
    @submit:register="register"
    ></Register>
</template>

<script>
import Register from '../components/Register.vue'
import accountsService from '../services/accounts.service';
export default{
    components:{
        Register,
    },
    data() {
            return {
                account: {},
               
            };
        },
        methods: {
            async register(data) {
                try {
                    console.log("chay register")
                    await accountsService.register(data);
                    
                    
                } catch (error) {
                    
                    console.log("chạy catch");
                    console.log(error);
            }
            },
        },
        created() {
            
            this.message = "";
        },

}
</script>