
import { createRouter, createWebHistory } from 'vue-router'
// authentication 
import Login from "../view/Login.vue"
import register from "../view/Register.vue"


// home component
import Home from "../view/Home.vue"
import MainPage from "../components/Home/MainPage.vue"
import Coupon from "../components/coupons/CoupounMain.vue"
import Redeem from "../components/Redeem/Redeem.vue"
import About from "../components/about/About.vue"

// dashboard component
import DashboardMain from "../view/DashboardMain.vue"
import AddCoupon from "../components/dashboard/dashboardComponent/AddCoupon.vue"
import showCoupon from "../components/dashboard/dashboardComponent/ShowCoupon.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //All ProductPage routers
         {
        path: "/",
        name: "Home",
        component: Home,
        children: [
      // Order Section
        // Product Section
        { path: "", name: "home-main", component: MainPage, },
        { path: "/coupons", name: "coupons", component: Coupon, },
        { path: "/redeem", name: "redeem", component: Redeem, },
        { path: "/about", name: "about", component: About, },
         
    ]},
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardMain,
        children: [
      // Order Section
        // Product Section
        { path: "", name: "Add-coupon", component: AddCoupon, },
        { path: "coupons", name: "show-coupon", component: showCoupon, },    
    ]},
    {
        path:'/login',
        name:"login",
        component:Login
    },
    {
        path:'/register',
        name:"register",
        component:register
    }
]
})

export default router;