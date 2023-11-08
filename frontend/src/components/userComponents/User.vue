<template>
    <div id="login" class="w-50">
        <h2>Tài khoản</h2>
        <Form 
            @submit="submitRegister"
            :validation-schema="registerFormSchema">
        <div class="form-group">
            <label for="name">Tên</label>
                <Field
                    name="name"
                    type="text"
                    class="form-control"
                    
                />
                <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
                <Field
                    name="email"
                    type="email"
                    class="form-control"
                    
                />
                <ErrorMessage name="email" class="error-feedback" />
        </div>
        
        <div class="form-group">
            <label for="phone">Số điện thoại</label>
                <Field
                    name="phone"
                    type="text"
                    class="form-control"
                    
                />
                <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
                <Field
                    name="address"
                    type="text"
                    class="form-control"
                    
                />
                <ErrorMessage name="phone" class="error-feedback" />
        </div>
       
        <div class="form-group" id="btn_login">
            <button class="btn btn-danger" type="submit">Lưu</button>
            <button class="btn btn-outline-danger"  @click="logout()">Đăng xuất</button>
            
               
        </div>
    </Form>
    </div>
</template>
<style>
#login{
 margin: auto;

}
#login h2{
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
    emits: ["submit:updateUser","submit:logoutUser" ],
    props: {
            user: { type: Object, required: true }
        },
    data(){
        const userFormSchema = yup.object().shape({
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            
            
        });
        return {
            userLocal: this.user,
            userFormSchema,
        };
    },
    methods: {
            submitUpdateUser() {
                console.log("Câp nhật thành công")

                this.$emit("submit:updateUser", this.userLocal);
            },
            logout(){
                this.$emit("submit:logoutUser");
            }
    
        },
}
</script>