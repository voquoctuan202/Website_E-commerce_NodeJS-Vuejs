import { createWebHistory, createRouter } from "vue-router"

import ViewHome from "../views/ViewHome.vue"
import ViewProduct from "../views/ViewProduct.vue"
import ViewCart from "../views/ViewCart.vue"
import ViewUser from "../views/ViewUser.vue"
import ViewLogin from "../views/ViewLogin.vue"
import ViewRegister from "../views/ViewRegister.vue"
import ViewDesProduct from "../views/ViewDesProduct.vue"
import ViewHoaDon from "../views/ViewHoaDon.vue"
import ViewDSDonHang from "../views/ViewDSDonHang.vue"

import ViewAdminHome from "../views/ViewAdHome.vue"
import ViewAdAddProducts from "../views/ViewAdAddProducts.vue"
import ViewAdUsers from "../views/ViewAdUsers.vue"
import ViewUpdateProduct from "../views/ViewUpdateProduct.vue"
import ViewUpdateUserAd from "../views/ViewUpdateUserAd.vue"
import ViewDSDonHangAd from "../views/ViewDSDonHangAd.vue"

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
        path: "/bill",
        name: "hoadon",
        component: ViewHoaDon,
        props: true 
    },
    {
        path: "/dsDonHang",
        name: "dsDonHang",
        component: ViewDSDonHang,
     
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
        path: "/updateProduct",
        name: "updateProduct",
        component: ViewUpdateProduct,
    },
    {
        path: "/updateUser",
        name: "updateUser",
        component: ViewUpdateUserAd,
    },
    {
        path: "/adminDonHang",
        name: "adminDonHang",
        component: ViewDSDonHangAd,
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