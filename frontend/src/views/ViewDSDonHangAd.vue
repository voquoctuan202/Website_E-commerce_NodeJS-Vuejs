<template>


    <NavAdmin></NavAdmin>
 
    <DsDonHangAd :dsdh="this.dsdh" 
                :dshh="this.dshh"
                @update:duyet="duyet" 
                @update:xacnhan="xacnhan"
                @get:xemtatca ="xemtatca()"
                @get:xemdangduyet="xemdangduyet()"
                @get:xemdaduyet="xemdaduyet()"
                @get:xemdagiao="xemdagiao()"
                >
               
            </DsDonHangAd>

</template>

<script>
    import productsService from '../services/products.service';
    import cartService from "../services/cart.service";
    import DsDonHangAd from '../components/adminComponents/DsDonHangAd.vue';
    import NavAdmin from '../components/adminComponents/NavAdmin.vue'
    export default{
        components:{
            NavAdmin,
            DsDonHangAd,
    
        },
        
        data(){
            return{
                dsdh: [],
                dshh: [],
                allProduct:[],
               
            }
        },
        methods:{
            async getAll(){
                this.dsdh = await cartService.getAllCart()
            
            },
            async duyet(dh){
                const cartupdate={
                    emailql: localStorage.getItem("email"),
                    trangThai:"daduyet",
                }
                await cartService.updateCart(dh._id,cartupdate)
                window.alert("Duyệt thành công")
                this.getAll()
            },
            async xacnhan(dh){
                const cartupdate={
                    ngayGiao: this.layNgayThangNamHienTai(),
                    trangThai:"dagiao",
                }
                await cartService.updateCart(dh._id,cartupdate)
                window.alert("Xác nhận giao thành công")
                this.getAll()
            },
            layNgayThangNamHienTai() {
           
                var ngayHienTai = new Date();
                var ngay = ngayHienTai.getDate();
                var thang = ngayHienTai.getMonth() + 1;
                var nam = ngayHienTai.getFullYear();

                ngay = ngay < 10 ? '0' + ngay : ngay;
                thang = thang < 10 ? '0' + thang : thang;
                var chuoiNgayThangNam = ngay + '/' + thang + '/' + nam;
                return chuoiNgayThangNam;
            },
            
            async getAllHHInCart(){
                this.dshh = await cartService.getAllHHInCart()
                console.log(this.dshh)
            },
            xemtatca(){
               this.getAll()
            }
            ,async xemdangduyet(){
                console.log("xemdangduyet")
                var ds =[]
                await this.getAll()
                for(var i in this.dsdh){
                    if(this.dsdh[i].trangThai == "dangduyet"){
                        ds.push(this.dsdh[i])
                    }
                
                }
                this.dsdh =ds
               
            }
            ,async xemdaduyet(){
                console.log("xemdaduyet")
                var ds =[]
                await this.getAll()
                for(var i in this.dsdh){
                    if(this.dsdh[i].trangThai == "daduyet"){
                        ds.push(this.dsdh[i])
                    }
                
                }
                this.dsdh =ds
            }
            ,async xemdagiao(){
                console.log("xemdagiao")
                var ds =[]
                await this.getAll()
                for(var i in this.dsdh){
                    if(this.dsdh[i].trangThai == "dagiao"){
                        ds.push(this.dsdh[i])
                    }
                
                }
                this.dsdh =ds
            }
            ,
            
           
        },
        mounted(){
            this.getAll()
            this.getAllHHInCart()
          
           
        }

}
</script>