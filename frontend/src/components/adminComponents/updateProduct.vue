<template>
    <div id="add_products" class="w-50">
        <h2 class="tieude">Chỉnh sửa sản phẩm</h2>
        <Form 
            @submit="updateProduct"
            :validation-schema="addPFormSchema">
        <div class="form-group">
        <label for="ma_sanpham">Mã sản phẩm</label>
            <Field
                name="ma_sanpham"
                type="text"
                class="form-control"
                v-model="product.maHH"
            />
            <ErrorMessage name="ten_sanpham" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ten_sanpham">Tên sản phẩm</label>
                <Field
                    name="ten_sanpham"
                    type="text"
                    class="form-control"
                    v-model="product.tenHH"
                />
                <ErrorMessage name="ten_sanpham" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="soluong">Số lượng</label>
                <Field
                    name="soluong"
                    type="number"
                    class="form-control"
                    v-model="product.soLuong"
                />
                <ErrorMessage name="soluong" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="gia">Giá</label>
                <Field
                    name="gia"
                    type="text"
                    class="form-control"
                    v-model="product.gia"
                />
                <ErrorMessage name="gia" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="mota">Mô tả</label>
                <Field
                    name="mota"
                    type="text"
                    class="form-control"
                    v-model="product.mota"
                />
                <ErrorMessage name="mota" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="hinh">Hình</label>
                <Field
                    name="hinh"
                    type="file" 
                    class="form-control"
                    v-model="file"
                />
                <ErrorMessage name="hinh" class="error-feedback" />
        </div>
        <div id="btn_login">
            <button class="btn btn-danger" type="submit">Cập nhật</button>
            <button class="btn btn-outline-danger" >Hủy</button>
        </div>
        
    </Form>
    
    </div>
</template>
<style>
#add_products{
 margin: auto;

}
#add_products h2{
    text-align: center;
}
#btn_login{
    text-align: center;
}
.error-feedback {
    color: red;
}
</style>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default{
    components:{
        Form,
        Field,
        ErrorMessage,
    },
    emits:{ emits: ["submit", ]},
    props: {
        product: {type: Object, default: {}}
    },
    data(){
        const updateFormSchema = yup.object().shape({
            
        });
        return {
            file:"",
            updateFormSchema,
        };
    },
    methods: {
        updateProduct(){
            
            if(this.file!=""){
                this.product.hinh = `/images/${this.file.name}`
            }
            console.log(this.product)
            this.$emit("submit",this.product)

            }
    
        },
}
</script>