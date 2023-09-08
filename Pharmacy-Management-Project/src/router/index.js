import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "../views/Auth/Login.vue";
import DashboardPage from "../views/Dashboard.vue";

const routes = [
    {path: "/", component: LoginPage},
    {path: "/dashboard", component: DashboardPage},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;