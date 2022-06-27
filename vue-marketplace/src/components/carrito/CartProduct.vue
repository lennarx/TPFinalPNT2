<template>
  <div class="card">
    <div class="productImg">
    <img :src="producto.imagen" class="card-img-top" alt="..." />
    </div>
    <div class="card-body">
    <div class="card-body-text">
      <div style="width:70%"><h5 class="card-title" >{{ productoData.nombre }}</h5></div>
      <div style="width:30%;text-align:center"><p class="card-text" ><b> ${{ productoData.precio }}</b></p></div>
      
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartProduct",
  data(){
    return{
      productoData:{}
    }
  },
  props: {
    producto: Object,
  },
  methods:{
    loadInfo(){
      this.productoData = this.producto
    }
  },
  created() {
    this.loadInfo();
  },
};
</script>
<style scoped>
.card{
    width: 100%; 
    height: 12rem; 
    display:flex;
    flex-direction:row;
    color:black;
}
.card-body-text{
  display: flex;

}
.productImg{
  object-fit: cover;
  width:30%;
  height:100%;
}
.card-body{
    width: 70%;
    height:100%;
}
</style>