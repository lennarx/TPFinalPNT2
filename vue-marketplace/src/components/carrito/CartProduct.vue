<template>
  <div class="card">
    <div class="productImg">
    <img :src="producto.imagen" class="card-img-top" alt="..." />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ productoData.nombre }}</h5>
      <p class="card-text">Precio: {{ productoData.precio }}</p>
      <p class="card-text">Cantidad: {{ productoData.cantidad }}</p>
      <button v-on:click="handleItem">Agregar al carrito</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "CartProduct",
  data(){
    return{
      productoData:{}
    }
  },
  props: {
    producto: Object,
  },
  methods:{
    loadInfo(){
      this.productoData = this.producto
    }
  },
  created() {
    this.loadInfo();
  },
};
</script>
<style scoped>
.card{
    width: 20rem; 
    height: 5rem; 
    display:flex;
    flex-direction:row;
}
.productImg{
    width:30%;
    height:100%;
}
.card-body{
    width: 70%;
    height:100%;
}
</style>