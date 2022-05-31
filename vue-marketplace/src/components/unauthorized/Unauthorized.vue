<template>
  <div style="align-items: center;margin: 15% 30% 30% 40%;">
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