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
      <div class="row">

      <div class="col-md-2 float-end">
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
    

    onSubmit() {
      if (this.form.id) {
        this.loadProducts(
          "https://625df5ed6c48e8761ba34b95.mockapi.io/api/v1/productos/" + this.form.id
        );
      } else {
        // let url = "https://rickandmortyapi.com/api/character?";
        // this.form.name ? (url = url + "name=" + this.form.name + "&") : null;
        // this.form.status
        //   ? (url = url + "status=" + this.form.status + "&")
        //   : null;
        // this.form.species
        //   ? (url = url + "species=" + this.form.species + "&")
        //   : null;
        // console.log(url);
        // this.loadCharacters(url);
      
      }
    },
  },
  created() {
    //se ejecuta cuando se crea el componente
    this.loadProducts();
  },
};
</script>
