<template>
    <div id="add_products" class="w-50">
        <h2>Thêm sản phẩm</h2>
        <Form 
            @submit="submitAddProduct"
            :validation-schema="addPFormSchema">
        <div class="form-group">
            <label for="ten_sanpham">Tên sản phẩm</label>
                <Field
                    name="ten_sanpham"
                    type="text"
                    class="form-control"
                    
                />
                <ErrorMessage name="ten_sanpham" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="soluong">Số lượng</label>
                <Field
                    name="soluong"
                    type="number"
                    class="form-control"
                    
                />
                <ErrorMessage name="soluong" class="error-feedback" />
        </div>
        
        <div class="form-group">
            <label for="mota">Mô tả</label>
                <Field
                    name="mota"
                    type="text"
                    class="form-control"
                    
                />
                <ErrorMessage name="mota" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="hinh">Hình</label>
                <Field
                    name="hinh"
                    type="text"
                    class="form-control"
                    
                />
                <ErrorMessage name="hinh" class="error-feedback" />
        </div>
       
        <div class="form-group" id="btn_login">
            <button class="btn btn-danger" type="submit">Thêm</button>
            <button class="btn btn-outline-danger" type="submit">Thoát</button>
            
               
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
    emits: ["submitAddProduct", ],
    
    data(){
        const addPFormSchema = yup.object().shape({
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            
            
        });
        return {
            addPLocal: this.user,
            addPFormSchema,
        };
    },
    methods: {
            submitAddProduct() {
                console.log("Câp nhật thành công")

                //this.$emit("submit:updateUser", this.userLocal);
            },
    
        },
}
</script>