<template>

    <div class="d-flex" id="product">
      
      
      <div class="row m-1 " >
        <div v-for="product in products" :key="product._id" class="item_product col-lg-3 col-md-5 col-sm-12"  >
          <div >
            <img class="img_product" :src="product.hinh" alt="" @click="showchitiet(product.maHH)">
            <div >
                <div class="name">{{ product.tenHH }}</div>
                <div class="sl"> <p>Số lượng: </p><input type="number" v-model="this.sl[product._id]" ></div>
                <div class="gia" > {{ this.dinhDangSoTien(product.gia) }}</div>
                
            </div>
            <div class="btn_add_cart">
              <button @click="addToCart(product,this.sl[product._id])" class="btn btn-outline-danger ">Thêm <i><i class="fa fa-cart-plus" aria-hidden="true"></i></i></button>
            </div>
          </div>
            
            
      
          
        </div>
      </div>
    </div>
  </template>
  
<style>



#product{
  width: 97%;
  height: max-content;
  background-color: rgb(255, 255, 255) ;
  
  margin: 10px;
  margin-top: 0;

  border-radius: 3px;
  box-shadow:1px 1px 1px 2px rgb(216, 216, 216);
  

}
.item_product{
  width: 230px;
 
  margin: 8px;
  padding: 9px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 1px 1px 1px 1px rgb(216, 216, 216);
}
.sl{
  display: flex;
  margin-top: 10px;
}
.sl >p{
  margin-left: 10px;
}
.sl > input{
  margin-left: 5px;
  width: 100px;
  height: 25px;
  border-radius: 3px;
}
.gia{
    font-size: 25px;
    font-weight: 500;
    color: brown;
}
.name{
  text-decoration: none;
  font-weight: 600;
  font-size: 18pt;
  color: black;
  background-color: white;
  
  
}

.img_product{
  width: 200px;
  height: 250px;
  border-radius: 5px;
}
.img_product:hover{
  width: 205px;
  height: 255px;
}
.btn_add_cart{
  text-align: center;
}



</style>

  <script>
  export default {
    data() {
      return {
        products: [],
        sl: []
      };
    },
    props: {
        products: {type: Array, default: []},
    },
    emits: ["update:addcart", "get:showchitiet"],
    methods: {
      addToCart(product,sl) {
        if(sl<0){
          window.alert("Số lượng không thể âm")
        }else{
          this.$emit("update:addcart",product,sl)
        }
        
      },
      showchitiet(maHH){
        localStorage.setItem("maHH",maHH)
        localStorage.removeItem("id_product")
        this.$router.push({name: "des"});
      },
      dinhDangSoTien(soTien) {
         
          var chuoiSoTien = ""+soTien;
          var viTriDauCham = chuoiSoTien.indexOf('.');

          if (viTriDauCham === -1) {
            viTriDauCham = chuoiSoTien.length;
          }

          for (var i = viTriDauCham - 3; i > 0; i -= 3) {
            chuoiSoTien = chuoiSoTien.slice(0, i) + '.' + chuoiSoTien.slice(i);
          }

          chuoiSoTien += 'đ';

          return chuoiSoTien;
        }
    },
  };
  </script>