<template>

<div style="width: 100%;display: flex;justify-content: center;">
  <div class="card" style="width: 35%; height:100%">
      <h1 style="text-align:center">Carrito</h1>
        <div
          :key="producto.id"
          v-for="producto in productos">
          <CartProduct :producto="producto"/>
        </div>
        <div>
          <div style="display:flex; width:100%;justify-content: space-between;margin-top:15px">
          <p><b>Total: ${{total}} </b></p>
          <div style="display:flex;flex-direction:row;">
            <button type="button" class="btn btn-danger" style="color:white;" v-on:click="borrarCarrito"> Vaciar carrito </button>
            <ModalConfirmar :total="total" :cantProductos="cantProductos"/>

          </div>
          </div>
        </div>

  </div>
</div>
</template>

<script>

import CartProduct from './CartProduct.vue'
import ModalConfirmar from './ModalConfirmar.vue'

export default {
  name: "Cart",
  data(){
    return{
      productos:this.$store.getters.itemsCart,
      cantProductos:0,
      total: 0
    }
  },
  components: {
    CartProduct,
    ModalConfirmar
  },
  computed: {
    products: function(){
      return this.$store.getters.itemsCart
    }
  },
  methods: {
    calcularData(){
      console.log("PRODUCTOS", this.productos)
      this.total=  this.productos.reduce(
        (prevValue,actualValue) => prevValue + parseInt(actualValue.precio),0
      )
      this.cantProductos = this.productos.length
    },
    borrarCarrito(){
      this.$store.commit('deleteAll')
      this.productos = []
      this.calcularData()
    },
  },
  created(){
    this.productos.length > 0 && this.calcularData()
  }
};
</script>
<style scoped>
*{
  color:black
}
</style>