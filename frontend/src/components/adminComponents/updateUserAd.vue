<template>
    <div id="login" class="w-50">
        <h2 class="tieude">Chỉnh sửa tài khoản</h2>
        <Form 
            @submit="submitUpdateUser"
            :validation-schema="registerFormSchema">
        <div class="form-group">
            <label for="name">Tên</label>
                <Field
                    name="name"
                    type="text"
                    class="form-control"
                    v-model="user.tenUser"
                />
                <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="gioitinh">Giới tính</label>
                <Field
                    name="gioitinh"
                    type="text"
                    class="form-control"
                    v-model="user.gioitinh"
                />
                <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="ngaysinh">Ngày sinh</label>
                <Field
                    name="ngaysinh"
                    type="text"
                    class="form-control"
                    v-model="user.ngaysinh"
                />
                <ErrorMessage name="email" class="error-feedback" />
        </div>
        
        <div class="form-group">
            <label for="phone">Số điện thoại</label>
                <Field
                    name="phone"
                    type="text"
                    class="form-control"
                    v-model="user.sdt"
                />
                <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Địa chỉ</label>
                <Field
                    name="address"
                    type="text"
                    class="form-control"
                    v-model="user.diachi"
                />
                <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="job">Nghề nghiệp</label>
                <Field
                    name="job"
                    type="text"
                    class="form-control"
                    v-model="user.nghenghiep"
                />
                <ErrorMessage name="job" class="error-feedback" />
        </div>
        <div class="form-group" id="btn_login">
            <button class="btn btn-danger" type="submit">Lưu</button>
            <button class="btn btn-outline-danger" type="button" @click="huy()">Hủy</button>
            
               
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
import usersService from "../../services/users.service";
export default{
    components:{
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:updateUser"],
    props: {
            user: { type: Object, require: true},

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
            async submitUpdateUser() {
                console.log(this.user._id,this.user)
                await usersService.updateUser(this.user._id,this.user)
                window.alert("Sửa thành công")
                this.$router.push("/adminUser")
            },
            huy(){
            
                this.$router.push("/adminUser")
            }
    
        },
}
</script>