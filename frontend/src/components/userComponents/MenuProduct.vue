<template>
    <div id="menu">
        
          <div id="menu_danhmuc">Danh mục</div>
          <div  id="item_danhmuc"> 
            <div>Iphone </div>
            <div>Samsung</div>
            <div>Oppo </div>
            <div>Xiaomi </div>
            <div>VSmart </div>
            <div>Bkav </div>
          </div>
          

    </div>

</template>
<style>
#menu{
  width: 300px;
  height: max-content;
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 1px 1px rgb(216, 216, 216);
  border-radius: 5px ;

}
#menu_danhmuc{
  background-color: rgb(248, 248, 248);
  color: brown;
  border: 1px solid brown;
  font-size: 20pt;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;

}
#item_danhmuc{
    padding: 3px;
    

}
#item_danhmuc >div{
    background-color: rgb(255, 255, 255);
    margin: 3px 5px 3px 5px;
    font-size: 15pt;
    border-bottom: 2px solid brown;
    display: flex;
    
}



</style>