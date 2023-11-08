<template>

    <div >
       
        <h2 class="tieude" style="font-size:20pt;">Danh sách User</h2>
      <div class="d-flex xemhang">
        
        <table  id="table_xemhang">
          <tr >
            <th>ID</th>
            <th>Tên người dùng</th>
            <th>Email</th>
            <th>Quyền</th>
            <th>Xóa</th>
          </tr>
          <tr v-for="product in products" :key="product.id">
          
              <th>{{ product.id }}</th>
              <th>{{ product.name }}</th>
              <th>{{ product.email}}</th>
              <th>{{ product.rule }}</th>
              <th><i class="fa fa-times" aria-hidden="true"></i></th>
          </tr>
        </table>
          
      
      </div>
    </div>

  </template>
  
<style>



.xemhang{
    width: 95%;
    height: max-content;
    background-color:rgb(251, 251, 251);
    margin: auto;
    margin-top: 10px;
    padding: 5px ;
    border-radius: 3px;
    box-shadow:1px 1px 1px 2px rgb(181, 181, 181);
}
#table_xemhang{
  width: 100%;
  text-align: center;
}
.img_hanghoa{
    width: 100px;
    height: 100px;
    border: 1px solid black;
}


</style>

<script>

export default {
    data() {
        return {
            products: [
            { id: 1, name: 'Tuan', email: "voquoctuan425@gmail.com", password: "123456", rule :1 },
            { id: 2, name: 'Tuan', email: "voquoctuan425@gmail.com", password: "123456", rule :1 },
            { id: 3, name: 'Tuan', email: "voquoctuan425@gmail.com", password: "123456", rule :2  },
            ],
        };
    },
    methods: {
    addToCart(product) {
        // Implement the cart functionality here
    },
    },
};
</script>