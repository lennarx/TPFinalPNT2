import {createRouter, createWebHistory} from 'vue-router';
import Home from "../components/home/Home.vue"
import Login from "../components/login/Login.vue"
import Marketplace from "../components/marketplace/Marketplace.vue"
import Unauthorized from "../components/unauthorized/Unauthorized.vue"

const logged = () => {
    if (localStorage.logged === "0" || !localStorage.logged) {
        return { path: '/unauthorized', name: 'Unauthorized', component: Unauthorized }
    }
}

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        beforeEnter: [logged]
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        component: Marketplace,
        beforeEnter: [logged]
    },
    {
        path: '/unauthorized',
        name: 'Unauthorized',
        component: Unauthorized
    }
];

const router = createRouter({
    history: createWebHistory(''),
    routes,
});

export default router;