<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/reusable/Navbar.vue';

export default {
    name: "App",
    components: { Navbar },
    created(){
      localStorage.logged = 0;
    }
};
</script>