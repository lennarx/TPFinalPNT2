<template>
  <div style="align-items: center;margin: 25rem 60rem 30rem 60rem;">
    <p>Usuario o contraseña incorrecta</p>
    <button class="btn btn-info mt-4 text-white" v-on:click="this.redirectToLogin()">LOGUEATE</button>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: "Unauthorized",
  methods:{
      redirectToLogin(){
          router.push('/')
      }
  }
};
</script>