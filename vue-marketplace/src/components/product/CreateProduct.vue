<template>
<div class="bg-dark text-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <form  v-on:submit.prevent="createProduct">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre: </label>
                <input type="text" class="form-control" v-model="this.producto.nombre" />
                <label for="descripcion" class="form-label">Descripción: </label>
                <input type="text" class="form-control" v-model="this.producto.descripcion" />
                <label for="precio" class="form-label">Precio: </label>
                <input type="text" class="form-control" v-model="this.producto.precio" />
                <label for="cantidad" class="form-label">Cantidad: </label>
                <input type="number" class="form-control" v-model="this.producto.cantidad" />
                <label for="imagen" class="form-label">Imagen: </label>
                <input type="text" class="form-control" v-model="this.producto.imagen" />
                <label for="marca" class="form-label">Marca: </label>
                <input type="text" class="form-control" v-model="this.producto.marca" />
                <br>
                <label for="categoria">Selecciona una Categoría: </label>
                <select name="categoria" id="categoria" v-model="this.producto.categoria">
                    <option>Alimentos</option>
                    <option>Jueguetes</option>
                    <option>Exoticos</option>
                    <option>Higiene</option>
                </select>
                <div class="d-grip gap-2" style="margin-top: 2%">
                        <input class="btn btn-info text-white" type="submit" value="Guardar"/>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div aria-live="polite" aria-atomic="true" class="position-fixed top-50 start-50 translate-middle">
      <div id="toastProduct" class="toast text-center bg-primary" role="alert" aria-live="assertive" aria-atomic="true" data-bs-animation="false" data-bs-autohide="false">
        <div class="toast-body">
          El producto fue creado con éxito.
          <div class="d-grid gap-2 col-4 mx-auto mt-2">
            <button type="button" class="btn btn-dark btn-sm" @click="toMarketplace()">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import {Toast} from 'bootstrap/dist/js/bootstrap.esm.min.js';
import router from '@/router';

export default {

  name: "CreateProduct",
  components: {
    Toast
  },
   data() {
    return {
      productos: [],
      info: {},
      producto: {
        nombre: null,
        descripcion: null,
        precio: null,
        cantidad: null,
        imagen: null,
        marca: null,
        categoria: null,
        id: null 
      },
    };
  },

  methods: {
     async createProduct(){

    const response = await axios.post("https://625df5ed6c48e8761ba34b95.mockapi.io/api/v1/productos/",this.producto);
     if(response.status == "201"){
        let toast = new Toast(document.getElementById("toastProduct"))
        toast.show()
      }; 
    },
     toMarketplace(){
    router.push({path:'/marketplace', replace: true})
   }
  }
};
</script>
