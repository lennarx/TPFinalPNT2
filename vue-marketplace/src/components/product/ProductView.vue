<template>
  <div class="card" style="width: 18rem; height: 45rem;">
    <img :src="producto.imagen" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ productoData.nombre }}</h5>
      <p class="card-text">Descripción: {{ productoData.descripcion }}</p>
      <p class="card-text">Precio: {{ productoData.precio }}</p>
      <p class="card-text">Cantidad: {{ productoData.cantidad }}</p>
      <button v-on:click="handleItem">Agregar al carrito</button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Producto",
  data(){
    return{
      productoData:{}
    }
  },
  props: {
    producto: Object,
  },
  methods:{
    handleItem(){
      this.$store.commit('increment',this.producto)
      // console.log('asd', this.producto)
      console.log(this.$store.getters.itemsCart)
    },
    loadInfo(){
      this.productoData = this.producto
    }
  },
  created() {
    this.loadInfo();
  },
};
</script>
