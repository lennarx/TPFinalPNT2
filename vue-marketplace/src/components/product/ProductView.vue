<template>
  <div class="card h-100" style="width: 18rem; height: 45rem;">
    <img :src="producto.imagen" style="height:200px; object-fit: cover" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ producto.nombre }}</h5>
      <p class="card-text">Descripción: {{ producto.descripcion }}</p>
      <p class="card-text">Precio: {{ producto.precio }}</p>
      <p class="card-text">Cantidad: {{ producto.cantidad }}</p>
      <button class="btn btn-info mt-4 text-white" @click="EditProductRedirect()">
            Editar Producto
      </button>
       <button class="btn btn-info mt-4 text-white" @click="DeleteProduct()">
            Eliminar Producto
      </button>
        
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
  }
};
</script>
