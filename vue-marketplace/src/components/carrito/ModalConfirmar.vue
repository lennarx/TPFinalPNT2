<template>
<div id="app">
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Confirmar compra</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" @click="showModal = false">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Vas a comprar {{cantProductos}} productos por un total de ${{total}}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" @click="showModal = false">Cancelar</button>
                <ModalCompraOk/>
                <!-- <button type="button" class="btn btn-success">Aceptar</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <button type="button" class="btn btn-success" style="color:white;marginLeft:15px;marginRight:15px;" @click="showModal = true">Confirmar compra</button>
</div>
</template>

<script>
import ModalCompraOk from './ModalCompraOk.vue'

export default {
  name: "ModalConfirmar",
  data(){
    return{
        showModal:false
    }
  },
  components:{
    ModalCompraOk
  },
  props:{
    cantProductos:Number,
    total:Number
  }
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
