<template>
<div id="chitiet_sanpham" class="d-flex">
    <img id="img_chitiet" src="/images/iphone.png">
    <div id="noidung_chitiet">
        <div id="ten_ct">Tên sản phẩm</div>
        <div id="mota_ct">Mô tả</div>
        <div id="gia_ct" >10.000.000đ</div>
        <div id="btn_ct">
            <button class="btn btn-outline-danger">Quay lại</button>
            <button class="btn btn-danger">Thêm vào giỏ hàng</button>
        </div>
    </div>
</div>
</template>

<style>
#chitiet_sanpham{
    width: 60%;
    height: max-content;
    background-color:  rgb(255, 255, 255);
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-radius: 3px;
    box-shadow:1px 1px 1px 2px rgb(181, 181, 181);
}
#img_chitiet{
    width: 30%;
    height: 350px;
    margin: 10px 10px 10px 30px;
    border: 1px solid black;
    border-radius: 5px;
}
#ten_ct{
    font-size: 25pt;
    color: brown;
}
#gia_ct{
    font-size: 20pt;
    color: brown;
    font-weight: 700;
}

#btn_ct > button{
    margin: 10px;
}



</style>

