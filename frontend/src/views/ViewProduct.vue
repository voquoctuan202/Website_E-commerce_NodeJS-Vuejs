<template>
    <Nav></Nav>
    <div class="d-flex">
        <h2 id="tieude_sp" class="tieude">SẢN PHẨM</h2>
        <div class="search" >
            <input type="text" class="input-group-lg" placeholder="Nhập tên sản phẩm" id="in_search"> 
            <button class="btn btn-danger" @click="search_product()">
                <i class="fa fa-search" aria-hidden="true"></i> Tìm kiếm</button>
        </div>
    </div>
   
    <div class="d-flex">      
            <MenuProduct
            @update:typeProduct="setTypeProduct"
            ></MenuProduct>
            
            
        <Product :products = "this.products"
        @update:addcart="addcart"
        ></Product>
    </div>
    <Footer></Footer>
   
</template>
<style>
#tieude_sp{
    margin-top: 10px;
    margin-left: 46%;
    text-align: center;
    font-size: 25pt;
    font-weight: 700;
    color: brown;
}
.search{
    margin-left: 15%;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: center;
}
.search >input{
    height: 35px;
    margin-right: 5px;
    margin-top: 5px;
    width: 250px;
    border: 1px solid gray;
    border-radius: 3px;
}
.search >button{
    height: 35px;
    
    margin-top: -5px;
    margin-right: 5px;
    text-align: justify;
}
</style>
<script>
import Product from "../components/userComponents/Products.vue"
import Nav from '../components/userComponents/NavUser.vue'
import MenuProduct from '../components/userComponents/MenuProduct.vue'
import Footer from '../components/userComponents/Footer.vue'
import productsService from "../services/products.service"
import cartService from "../services/cart.service"
export default{
    components:{
        Product,
        Nav,
        MenuProduct,
        Footer
    },
    data() {
        return {
            products: [],
            search_key:""
            
        };
    },
    methods: {
            layNgayGioHienTai() {
                
                var ngayGioHienTai = new Date();
                var ngay = ngayGioHienTai.getDate();
                var thang = ngayGioHienTai.getMonth() + 1; 
                var nam = ngayGioHienTai.getFullYear();
                var gio = ngayGioHienTai.getHours();
                var phut = ngayGioHienTai.getMinutes();
                var giay = ngayGioHienTai.getSeconds();

                var chuoiNgayGio = ngay + '/' + thang + '/' + nam + ' ' + gio + ':' + phut + ':' + giay;

                return chuoiNgayGio;
            },
          
            async search_product(){
                await this.showAll()
                const name = document.getElementById("in_search").value

                const chuanHoaTen = (tenHH) => tenHH.toLowerCase().replace(/[^a-z]/g, '');
                const tenCanTimChuanHoa = chuanHoaTen(name);
                const SanphamTimThay = [];
                
                for (const ten of this.products) {
    
                    if (chuanHoaTen(ten.tenHH).includes(tenCanTimChuanHoa)) {
                        SanphamTimThay.push(ten); // Thêm tên vào danh sách tìm thấy
                    }
                }
                console.log(SanphamTimThay)
                
                this.products = SanphamTimThay;

            },
            async showAll() {
                try {
                    this.products = await productsService.showall();
                } catch (error) {
                    console.log(error);
                }
            },
            async setTypeProduct(type){
                try {
                    if(type=="All"){
                        this.showAll()
                    }else{
                        this.products = await productsService.showProductByType(type);
                    }
                    
                } catch (error) {
                    console.log(error);
                }
            },  
            async addcart(product,sl) {
                if(!sl){
                    sl=1
                }
                const DHHT =  await cartService.getCartDangMua(localStorage.getItem('email'))
            
                console.log("Id: ",DHHT._id)
                const fillter={

                    maDH: DHHT._id,
                    email: localStorage.getItem('email'),
                    soluong:sl,
                    maHH: product.maHH,
                }
              
                if(!localStorage.getItem("email")){
                    window.alert("Mời bạn đăng nhập để có thể thêm sản phẩm vào giỏ") 
                }else{
                    console.log(fillter)
                    await cartService.add_product(fillter)
                    window.alert(`Đã thêm sản phẩm ${product.tenHH} số lượng ${sl} vào giỏ hàng` )
                }
                
                
                
            },
    },
    mounted() {
            this.showAll();
    },
}
</script>