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
      <select visible="false" v-model="selected" style="margin-right: 15px" v-on:change="filtrarPorCategoria">
        <option disabled value="">Seleccione un elemento</option>        
        <option value="Alimentos">Alimentos</option>
        <option value="Juguetes">Juguetes</option>
        <option value="Exoticos">Exoticos</option>
        <option value="Higiene">Higiene</option>
        <b-form-select v-model="select" :options="value"></b-form-select>
      </select>      

      <label>Ordenar por Precio: </label>
      <select v-if="admin" v-model="selected" v-on:change="ordenamiento">
        <option disabled value="">Seleccione un elemento</option>        
        <option value="Menor">Ordenar de Mayor a Menor</option>
        <option value="Mayor">Ordenar de Menor a Mayor</option>
        <b-form-select v-model="select" :options="value"></b-form-select>
      </select>
      <br/>
      <br/>
      <div class="row">

      <div class="col-md-2 float-end" v-if="admin">
        <input
          class="btn btn-primary "
          type="button"
          value="Nuevo Producto"
          @click="createProductRedirect()"/>
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
      admin: sessionStorage.role === "admin" ? true : false
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
      this.productos = [response.data];
      console.log(this.productos);
    },
    createProductRedirect(){
      router.push({path:'/createproduct', replace: true})
    },
    EditProductRedirect(){
      router.push({path:'/editproduct', replace: true})
    },
    

  ordenamiento(e){
      if (e.target.value == "Mayor"){
        this.productos = this.productos.sort((a,b)=> parseInt(a.precio) - parseInt(b.precio))                
      }
      else if(e.target.value == "Menor"){
        this.productos = this.productos.sort((a,b)=> parseInt(b.precio) - parseInt(a.precio))        
      }
    },
    filtrarPorCategoria(e){
      this.productos= this.productosOriginal.filter((producto)=> producto.categoria === e.target.value)
    },
    onSubmit() {
      if (this.form.id) {
        console.log(this.form.id)
        console.log(this.productos)
        this.productos = this.productosOriginal.filter((e)=> e.id == this.form.id)
      }
    },
  },
  created() {
    //se ejecuta cuando se crea el componente
    this.loadProducts();
  },
};
</script>
