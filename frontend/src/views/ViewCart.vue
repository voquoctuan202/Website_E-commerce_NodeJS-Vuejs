<template>
    <Nav></Nav>
 
    <Cart :products="this.products" 
        :tongsoluong="this.tongsoluong" 
        :tongsotien="this.tongsotien"
        @delete:removeformcart=" removeFromCart"
        @update:thanhtoan="thanhtoan"
        ></Cart>
    <Footer></Footer>
</template>

<script>
import Cart from "../components/userComponents/Cart.vue"
import Nav from '../components/userComponents/NavUser.vue'
import Footer from '../components/userComponents/Footer.vue'
import cartService from "../services/cart.service"
import productsService from "../services/products.service"
export default{
    components:{
        Cart,
        Nav,
        Footer
    },
    data() {
            return {
                products: [],
                tongsoluong: 0,
                tongsotien:0,
                allproduct:[]
            };
    },
    methods:{
        checkLogin(){
            if(localStorage.getItem("email")==null){
                window.alert("Bạn chưa đăng nhập")
                this.$router.push({name: "login"})
            }else{
                
            }
            
        },
        async removeFromCart(data){
           await cartService.deleteProduct(data._id)
           this.getProductByMaDH()
        },
        async getProductByMaDH(){
            const DHHT =  await cartService.getCartDangMua(localStorage.getItem("email"))
            console.log("Id: ",DHHT._id)
            this.products =  await cartService.getCartByMaDH(DHHT._id)

            this.allproduct = await productsService.showall()
            this.tongsoluong =  this.tongso()
            this.tongsotien = this.tongtien()
        },
        
        tongso(){
            var i
            var tong =0
            for(i in this.products){
                tong =tong+ this.products[i].soluong
            }
           return tong
        },
        tongtien(){
            var i,j
            var tong =0
            for(i in this.products){
                for(j in this.allproduct){
                    if(this.products[i].maHH == this.allproduct[j].maHH){
                        console.log(this.products[i].soluong ,"    ", this.allproduct[j].gia)
                       tong = tong + (this.products[i].soluong * this.allproduct[j].gia) 
                    }
                }
            }
            console.log("Tổng tiền:" ,tong)
           return tong
        },
        thanhtoan(in_product,in_user,in_tien){
       
            
            localStorage.product = JSON.stringify(in_product)
            localStorage.user = JSON.stringify(in_user)
            localStorage.tien = JSON.stringify(in_tien)
            
            

            this.$router.push({ name:"hoadon"})
        }

        

    },
    mounted(){
        this.getProductByMaDH();
        this.checkLogin();
    }
}
</script>