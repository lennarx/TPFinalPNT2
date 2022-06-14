<template>
  <nav class="navbar navbar-expand-lg navbar-dark " style="background-color: dodgerblue;">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">Petshop </router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" >
            <router-link class="nav-link active" to="/marketplace">Marketplace</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" to="/cart">Carrito</router-link>
            <!-- <Cart/> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Cart from '../carrito/Cart.vue'
export default {
  name: "Navbar",
  components: {
    Cart
  },
  data(){
    return {logged: 0}
  },
  methods: {
    checkLogin(){
      this.logged = sessionStorage.logged
      return this.logged == 1
    }
  }
};
</script>