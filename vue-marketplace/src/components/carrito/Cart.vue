<template>
  <div class="card" style="width: 18rem; height: 45rem;">
      <p>Carrito</p>
      <button v-on:click="handleItem">asd</button>
       <div class="row justify-content-center" style="display:flex;flex-direction:column;position: relative;z-index: 50;">
        <div
          :key="producto.id"
          v-for="producto in productos"
          class="col-4 text-dark mt-4"
          
        >
          <CartProduct :producto="producto"/>
        </div>
        </div>
  </div>
</template>

<script>

import CartProduct from './CartProduct.vue'
import mapGetters from 'vuex'
export default {
  name: "Cart",
  data(){
    return{
      //TO-DO: agregar precio total, agregar comprar 
      //TO-DO: No bajar qty al agregar al carrito, cuando se efectua la compra, mandar put a mock api seleccionando un array
      //TO-DO: Agregar modal que diga "Gracias por tu compra"
      //TO-DO: Agregar boton de cancelar: borra el carrito
      productos:this.$store.getters.itemsCart
    }
  },
  components: {
    CartProduct
  },
  computed: {
    products: function(){
      return this.$store.getters.itemsCart
    }
  },
  methods: {
    handleItem(){
      console.log(this.productos)
    }
  },
  created(){

    console.log(this.productos)
  }
};
</script>