import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/Home.vue";
import Login from "../components/login/Login.vue";
import Marketplace from "../components/marketplace/Marketplace.vue";
import Unauthorized from "../components/unauthorized/Unauthorized.vue";
import CreateProduct from "../components/product/CreateProduct.vue";
import EditProduct from "../components/product/EditProduct.vue";
import Cart from "../components/carrito/Cart.vue";
const logged = () => {
  if (sessionStorage.logged === "0" || !sessionStorage.logged) {
    return {
      path: "/unauthorized",
      name: "Unauthorized",
      component: Unauthorized,
    };
  }
};

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    beforeEnter: [logged],
  },
  {
    path: "/marketplace",
    name: "Marketplace",
    component: Marketplace,
    beforeEnter: [logged],
  },
  {
    path: "/cart",
    name: "Carrito",
    component: Cart,
    beforeEnter: [logged],
  },
  {
    path: "/unauthorized",
    name: "Unauthorized",
    component: Unauthorized,
  },
  {
    path: "/createproduct",
    name: "CreateProduct",
    component: CreateProduct,
  },
  {
    path: "/editproduct/:id",
    name: "EditProduct",
    component: EditProduct,
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

export default router;
