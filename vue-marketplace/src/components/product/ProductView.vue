<template>
  <div class="card h-100" style="width: 18rem; height: 45rem;">
    <div aria-live="polite" aria-atomic="true" class="position-fixed top-50 start-50 translate-middle" style="z-index:1">
      <div id="toastProduct" class="toast text-center bg-primary" role="alert" aria-live="assertive" aria-atomic="true" data-bs-animation="false" data-bs-autohide="false">
        <div class="toast-body">
          El producto fue eliminado con éxito.
          <div class="d-grid gap-2 col-4 mx-auto mt-2">
            <button type="button" class="btn btn-dark btn-sm" @click="toMarketplace()">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
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
import {Toast} from 'bootstrap/dist/js/bootstrap.esm.min.js';

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
          console.log("ok")
         let toast = new Toast(document.getElementById("toastProduct"))
         toast.show()
        }
      },
      toMarketplace(){
        router.go()
      }
  }
};
</script>
