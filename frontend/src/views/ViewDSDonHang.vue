<template>
<NavUser></NavUser>
<DsDonHang :dsdh="this.dsdh" @delete:donhang="deleteDH"></DsDonHang>
<Footer></Footer>

</template>

<script>
import cartService from "../services/cart.service";
import DsDonHang from "../components/userComponents/DSDonHang.vue" 
import NavUser from "../components/userComponents/NavUser.vue"
import Footer from "../components/userComponents/Footer.vue";
export default{
    components:{
        DsDonHang,
        NavUser,
        Footer
    },
    data(){
        return{
            dsdh: []
        }
    },
    methods: {
        async getDonHangByEmail(){
            this.dsdh = await cartService.getDSDonHang(localStorage.getItem("email"))
            
        },
        async deleteDH(dh){
            await cartService.deleteDH(dh._id)
          var sl = dh.soluong
          var i
           for( i=0;i<sl;i++){
             await cartService.deleteProInCart(dh._id)
           }
           window.alert("Xóa thành công")
           this.getDonHangByEmail()
          
        }
    },
    mounted(){
        this.getDonHangByEmail()
    }

}

</script>