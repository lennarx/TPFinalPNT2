<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/reusable/Navbar.vue';
// import Login from "./components/login/Login.vue";

export default {
    name: "App",
    components: { Navbar }
};
</script>