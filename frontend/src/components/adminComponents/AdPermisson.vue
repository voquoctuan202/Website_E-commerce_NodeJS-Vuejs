<template>
    <div id="ad_permission" class="w-50">
        <h2 class="tieude">Cấp quyền</h2>
        <Form 
            @submit="submitPermission"
            :validation-schema="PermissionFormSchema">
        <div class="form-group">
            <label for="id">ID</label>
                <Field
                    name="id"
                    type="text"
                    class="form-control"
                    
                />
                <ErrorMessage name="id" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="rule">Quyền </label>
                <Field
                    name="rule"
                    type="number"
                    class="form-control"
                    
                />
                <ErrorMessage name="rule" class="error-feedback" />
        </div>
        
        <div class="form-group">
            <label for="passAD">Mật khẩu admin</label>
                <Field
                    name="passAD"
                    type="text"
                    class="form-control"
                    
                />
                <ErrorMessage name="mota" class="error-feedback" />
        </div>
        
       
        <div class="form-group" style="text-align: center;">
            <button class="btn btn-danger" type="submit">Cấp quyền</button>

            
               
        </div>
    </Form>
    </div>
</template>
<style>
#ad_permission{
 margin: auto;

}
#ad_permission h2{
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
        const PermissionFormSchema = yup.object().shape({
            rule: yup
                    .string()
                    .matches(
                    /((1|2|3))/g,
                    "Chỉ được chọn 1,2,3 tương ứng với (khách hàng, nhân viên, admin)"
                ),
                    
            
            
        });
        return {
            addPLocal: this.user,
            PermissionFormSchema,
        };
    },
    methods: {
            submitPermission() {
                console.log("Câp nhật thành công")

                //this.$emit("submit:updateUser", this.userLocal);
            },
    
        },
}
</script>