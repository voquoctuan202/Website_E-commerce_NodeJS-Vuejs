<template>
    <div id="register" class="w-50">
        <h2 class="tieude">Đăng ký</h2>
        <Form 
            @submit="submitRegister"
            :validation-schema="registerFormSchema">
        <div class="form-group">
            <label for="tentk">Tên tài khoản</label>
                <Field
                    name="tentk"
                    type="text"
                    class="form-control"
                    v-model="registerLocal.tentk"
                />
                <ErrorMessage name="tentk" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
                <Field
                    name="email"
                    type="email"
                    class="form-control"
                    v-model="registerLocal.email"
                />
                <ErrorMessage name="email" class="error-feedback" />
        </div>
        
        <div class="form-group">
            <label for="password">Mật khẩu</label>
                <Field
                    name="password"
                    type="password"
                    class="form-control"
                    v-model="registerLocal.matkhau"
                />
                <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password2">Xác nhận mật khẩu</label>
                <Field
                    name="password2"
                    type="password"
                    class="form-control"
                    v-model="registerLocal.xnmatkhau"
                />
                <ErrorMessage name="password2" class="error-feedback" />
        </div>
        
        <div class="form-group" id="btn_login">
            <button class="btn btn-danger" type="submit">Đăng ký</button>
            <button class="btn btn-outline-danger" @click="backLogin" >
                Đăng nhập
            </button>
               
        </div>
    </Form>
    </div>
</template>
<style>
#register{
 margin: auto;

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
    emits: ["submit:register", ],
    props: {
            account: { type: Object, required: true }
        },
    data(){
        const registerFormSchema = yup.object().shape({
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            password: yup
                .string()
                .min(8, "Mật khẩu phải từ 8 kí tự")
            
        });
        return {
            registerLocal: this.account,
            registerFormSchema,
        };
    },
    methods: {
            submitRegister() {
                this.$emit("submit:register", this.registerLocal);
            },
            backLogin(){
                this.$router.push({name : "login"})
            }
        },
}
</script>