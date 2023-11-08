import { createWebHistory, createRouter } from "vue-router"
import ViewHome from "../views/ViewHome.vue"
import ViewProduct from "../views/ViewProduct.vue"
import ViewCart from "../views/ViewCart.vue"
import ViewUser from "../views/ViewUser.vue"
import ViewLogin from "../views/ViewLogin.vue"
import ViewRegister from "../views/ViewRegister.vue"
import ViewDesProduct from "../views/ViewDesProduct.vue"

import ViewAdminHome from "../views/ViewAdHome.vue"
import ViewAdAddProducts from "../views/ViewAdAddProducts.vue"
import ViewAdUsers from "../views/ViewAdUsers.vue"

import ViewStaffHome from "../views/ViewStaffHome.vue"
import ViewStaffAddProduct from "../views/ViewStaffAddProducts.vue"
const routes = [
    {
        path: "/",
        name: "home",
        component: ViewHome,
    },
    {
        path: "/product",
        name: "product",
        component: ViewProduct,
    },
    {
        path: "/cart",
        name: "cart",
        component: ViewCart,
    },
    {
        path: "/user",
        name: "user",
        component: ViewUser,
    },
    {
        path: "/des",
        name: "des",
        component: ViewDesProduct,
    },

    {
        path: "/admin",
        name: "adminHome",
        component: ViewAdminHome,
    },
    {
        path: "/addProduct",
        name: "addProduct",
        component: ViewAdAddProducts,
    },
    {
        path: "/adminUser",
        name: "adminUser",
        component: ViewAdUsers,
    },

    {
        path: "/staff",
        name: "staffHome",
        component: ViewStaffHome,
    },
    {
        path: "/addProductStaff",
        name: "addProductStaff",
        component: ViewStaffAddProduct,
    },
    
    {
        path: "/login",
        name: "login",
        component: ViewLogin,
    },
    {
        path: "/register",
        name: "register",
        component: ViewRegister,
    },
    
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    })
export default router