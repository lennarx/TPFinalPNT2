<template>
  <div class="card" style="width: 18rem">
    <img :src="producto.imagen" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ producto.nombre }}</h5>
      <p class="card-text">Descripción: {{ producto.descripcion }}</p>
      <p class="card-text">Precio: {{ producto.precio }}</p>
      <p class="card-text">Cantidad: {{ producto.cantidad }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Producto",
  props: {
    // propiedades que se le pasa al componente
    producto: Object,
  },
};
</script>
