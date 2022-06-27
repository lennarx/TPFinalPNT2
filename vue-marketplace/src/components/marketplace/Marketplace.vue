<template>
  <div class="bg-dark text-white">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <form v-on:submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="id" class="form-label"
                >Id: <span class="text-danger">*</span></label
              >
              <input type="number" class="form-control" v-model="form.id" />
            </div>
            <!-- <div class="mb-3">
              <label for="name" class="form-label"
                >Nombre: <span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :disabled="form.id"
              />
            </div>
            <div class="mb-3">
              <label for="status" class="form-label"
                >Estado: <span class="text-danger">*</span></label
              >
              <select
                class="form-select"
                aria-label="Estado"
                v-model="form.status"
                :disabled="form.id"
              >
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="species" class="form-label"
                >Especie: <span class="text-danger">*</span></label
              >
              <select
                class="form-select"
                aria-label="Especie"
                v-model="form.species"
                :disabled="form.id"
              >
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Mythological Creature">
                  Mythological Creature
                </option>
                <option value="Robot">Robot</option>
              </select>
            </div> -->
            <div class="d-grid gap-2">
              <input
                class="btn btn-info text-white"
                type="submit"
                value="Buscar"
              />
            </div>
          </form>
        </div>
      </div>
      <br/>
      <label>Seleccione una categoria: </label>
      <select v-model="selected" style="margin-right: 15px" v-on:change="filtrarPorCategoria">
        <option disabled value="">Seleccione un elemento</option>        
        <option value="Alimentos">Alimentos</option>
        <option value="Juguetes">Juguetes</option>
        <option value="Exoticos">Exoticos</option>
        <option value="Higiene">Higiene</option>
        <b-form-select v-model="select" :options="value"></b-form-select>
      </select>      

      <label>Ordenar por Precio: </label>
      <select v-model="selected" v-on:change="ordenamiento">
        <option disabled value="">Seleccione un elemento</option>        
        <option value="Menor">Ordenar de Mayor a Menor</option>
        <option value="Mayor">Ordenar de Menor a Mayor</option>
        <b-form-select v-model="select" :options="value"></b-form-select>
      </select>
      <br/>
      <br/>
      <div class="row">

      <div class="col-md-2 float-end">
        <input
          class="btn btn-primary "
          type="button"
          value="Nuevo Producto"
          @click="createProductRedirect()"
        />
      </div>

      <br/>

      <!-- por id nombre especie y estado -->
      <div class="row justify-content-center">
        <div
          :key="producto.id"
          v-for="producto in productos"
          class="col-4 text-dark mt-4"
        >
          <ProductView :producto="producto" />
        </div>
      </div> 

      </div>
  
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductView from "../product/ProductView.vue";
import router from '@/router'

export default {
  name: "Marketplace",
  data() {
    return {
      productos: [],
      productosOriginal: [],
      info: {},
      form: {
        id: null,
        nombre: null,
        descripcion: null,
        cantidad: null,
      },
    };
  },
  components: {
    ProductView,
  },
  methods: {
    async loadProducts(url = "https://625df5ed6c48e8761ba34b95.mockapi.io/api/v1/productos") {
      const response = await axios.get(url);
      this.productos =response.data;
      this.productosOriginal =response.data;
    },
    async loadProduct(url) {
      const response = await axios.get(url);
      this.personajes = [response.data];
      console.log(this.personajes);
    },
    createProductRedirect(){
      router.push({path:'/createproduct', replace: true})
    },
    EditProductRedirect(){
      router.push({path:'/editproduct', replace: true})
    },

  ordenamiento(e){
      if (e.target.value == "Mayor"){
        this.productos = this.productos.sort((a,b)=> parseInt(b.precio) - parseInt(a.precio))
        console.log(this.productos);
      }
      else if(e.target.value == "Menor"){
        this.productos = this.productos.sort((a,b)=> parseInt(a.precio) - parseInt(b.precio))
        console.log(this.productos);
      }
    },
    filtrarPorCategoria(e){
      this.productos= this.productosOriginal.filter((producto)=> producto.categoria === e.target.value)
    },
    onSubmit() {
      if (this.form.id) {
        this.loadProducts(
          "https://625df5ed6c48e8761ba34b95.mockapi.io/api/v1/productos/" + this.form.id
        );
      }
    },
  },
  created() {
    //se ejecuta cuando se crea el componente
    this.loadProducts();
  },
};
</script>
