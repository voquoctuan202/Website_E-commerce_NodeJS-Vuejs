<template>


    <NavAdmin></NavAdmin>
 
    <UsersAdmin :users="this.users" @delete:userByEmail="deleteUser"></UsersAdmin>
</template>

<script>
    import usersService from '../services/users.service';
    import accountsService from '../services/accounts.service';
    import UsersAdmin from '../components/adminComponents/UsersAdmin.vue';
    import NavAdmin from '../components/adminComponents/NavAdmin.vue'
    export default{
        components:{
            NavAdmin,
            UsersAdmin,
    
        },
        data(){
            return{
                users:[],
            }
        },
        methods:{
            async getdata(){
                this.users = await usersService.getAllUser();
            },
            
            async deleteUser(email){
                
                await usersService.deleteUser(email)
                await accountsService.deleteAccountByEmail(email)
                window.alert("Xóa thành công")
                this.getdata()
            }
        },
        mounted(){
            this.getdata()
        }

}
</script>