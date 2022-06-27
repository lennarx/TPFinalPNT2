

<template>
  <div class="bg-dark text-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <form  v-on:submit.prevent="editProduct">
            <div class="mb-3">
                <label for="id" class="form-label">Id: </label>
                <input id="id" type="text" class="form-control" v-model="this.producto.id" disabled />
                <label for="nombre" class="form-label">Nombre: </label>
                <input type="text" class="form-control" v-model="producto.nombre" />
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
                        <input class="btn btn-info text-white" type="submit" @click="editProduct()" value="Guardar"/>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div aria-live="polite" aria-atomic="true" class="position-fixed top-50 start-50 translate-middle">
    <div id="toastProduct" class="toast text-center bg-primary" role="alert" aria-live="assertive" aria-atomic="true" data-bs-animation="false" data-bs-autohide="false">
      <div class="toast-body">
        El producto fue editado con éxito.
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
  name: "EditProduct",
  props: {
    producto: Object,
  },

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
    
     async loadProduct(url="https://625df5ed6c48e8761ba34b95.mockapi.io/api/v1/productos/" + this.$route.params.id){
      const response = await axios.get(url);
      let productoObtenido = response.data;
      this.producto.id= productoObtenido.id;
      this.producto.nombre = productoObtenido.nombre;
      this.producto.descripcion = productoObtenido.descripcion;
      this.producto.precio = productoObtenido.precio;
      this.producto.cantidad = productoObtenido.cantidad;
      this.producto.imagen = productoObtenido.imagen;
      this.producto.marca = productoObtenido.marca;
      this.producto.categoria = productoObtenido.categoria;
    },
    async editProduct(){

      const url="https://625df5ed6c48e8761ba34b95.mockapi.io/api/v1/productos/" + this.$route.params.id;
      const response = await axios.put(url, this.producto);
      console.log(response.status);
      if(response.status == "200"){
        let toast = new Toast(document.getElementById("toastProduct"))
        toast.show()
      }
    },
    toMarketplace(){
    router.push({path:'/marketplace', replace: true})
   }
  },
 

  created(){
  
  this.loadProduct();
  }
  

};
</script>
