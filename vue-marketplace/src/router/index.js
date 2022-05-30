import {createRouter, createWebHistory} from 'vue-router';
import Home from "../components/home/Home.vue"
import Login from "../components/login/Login.vue"
import Marketplace from "../components/marketplace/Marketplace.vue"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        component: Marketplace
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;