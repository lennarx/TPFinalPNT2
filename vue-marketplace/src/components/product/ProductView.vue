<template>
  <div class="card h-100" style="width: 100%; height: 45rem;">
    <img :src="producto.imagen" style="height:200px; object-fit: cover" class="card-img-top" alt="..." />
    <div class="card-body">
        <h1 class="card-text">${{ producto.precio }}</h1>

      <div style="height:18rem">
        <h5 class="card-title" style="height:2.5rem">{{ producto.nombre }}</h5>
        <p class="card-text" style="height:12rem">Descripción: {{ producto.descripcion }}</p>
        <p class="card-text" style="font-size:1.5rem"><i class="bi bi-box2-fill"></i> {{ producto.cantidad }} unidades</p>
      </div>
      <div style="display:flex;justify-content: space-around">

      <button class="btn btn-primary mt-4" @click="EditProductRedirect()">
            Editar <i class="bi bi-pencil-square"></i>
      </button>
       <button class="btn btn-danger mt-4" @click="DeleteProduct()">
            Eliminar <i class="bi bi-trash"></i>
      </button>
      <button class="btn btn-success mt-4" v-on:click="handleItem">
            Añadir <i class="bi bi-cart-plus"></i>
      </button>
      </div>
        
    </div>
  </div>
</template>

<script>
import router from '@/router'
import axios from "axios"
export default {
  name: "Producto",
  props: {
    producto: Object,
  },
  methods: {
      EditProductRedirect(){
        router.push({path:'/editproduct/' + this.producto.id, replace: true})
      },
      async DeleteProduct(){
        const url="https://625df5ed6c48e8761ba34b95.mockapi.io/api/v1/productos/" + this.producto.id;
        const response = await axios.delete(url);
        console.log(response.status);
        if(response.status == "200") {
          console.log("hola")
           router.push({path:'/marketplace', replace: true})
        }
      }, 
      handleItem(){
      this.$store.commit('increment',this.producto)
      console.log(this.$store.getters.itemsCart)
    },
  }
};
</script>
