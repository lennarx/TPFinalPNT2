<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/home">Petshop </router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- <li class="nav-item" v-if="this.checkLogin()"> -->
          <li class="nav-item" >
            <router-link class="nav-link active" to="/marketplace">Marketplace</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    logged: null
  },
  methods: {
    checkLogin(){
      this.logged = sessionStorage.logged
      return this.logged == 1
    }
  }
};
</script>