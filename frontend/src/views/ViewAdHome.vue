<template>
    <NavAdmin></NavAdmin>
    <div class="d-flex">
        <h2 id="tieude_sp" class="tieude">SẢN PHẨM</h2>
        
        <input type="text" class="input-group-lg" placeholder="Nhập tên sản phẩm" id="input_ad"> 
        <button class="btn btn-danger" @click="search_productAd" id="btn_search_ad">
                <i class="fa fa-search" aria-hidden="true"></i> Tìm kiếm</button>
        <button class="btn btn-danger" @click="reload" id="btn_reload_ad">
                <i class="fa fa-refresh" aria-hidden="true"></i> Làm mới</button>
           
         
    </div>
    <ProductsAdmin :products="this.products" @delete:product="deleteProduct"></ProductsAdmin>
</template>
<style>
    #input_ad{
        width: 300px;
        height: 40px;
        margin-top: 20px;
        margin-left: 50px;
    }
    #btn_search_ad{
        height: 40px;
        margin-left: 5px;
        margin-top: 20px;
    }
    #btn_reload_ad{
        height: 40px;
        margin-left: 5px;
        margin-top: 20px;
    }
</style>
<script>
    import ProductsAdmin from '../components/adminComponents/ProductsAdmin.vue';
    import NavAdmin from '../components/adminComponents/NavAdmin.vue'
    import productsService from "../services/products.service"
    export default{
        components:{
            NavAdmin,
            ProductsAdmin,
        },
        data(){
            return{
                products:[]
            }
        },
        methods:{
            async showAll() {
                try {
                    this.products = await productsService.showall();
                } catch (error) {
                    console.log(error);
                }
            },
            async search_productAd(){
                
                await this.showAll()

                const name = document.getElementById("input_ad").value

                const chuanHoaTen = (tenHH) => tenHH.toLowerCase().replace(/[^a-z]/g, '');
                const tenCanTimChuanHoa = chuanHoaTen(name);
                const SanphamTimThay = [];
                
                for (const ten of this.products) {
    
                    if (chuanHoaTen(ten.tenHH).includes(tenCanTimChuanHoa)) {
                        SanphamTimThay.push(ten); // Thêm tên vào danh sách tìm thấy
                    }
                }
                
                this.products = SanphamTimThay;

            },
            reload(){
                this.showAll()
            },
            async deleteProduct(maHH){
                await productsService.deleteProduct(maHH)

                this.showAll()
            },
            checkAdmin(){
            
            if(localStorage.getItem("rule")== "kh"){
                this.$router.push("/login")
            }else{
                
            }
            
        },
        },
        
        mounted(){
            this.checkAdmin()
            this.showAll()
        }
}
</script>
