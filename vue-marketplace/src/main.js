import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { createStore } from "vuex";
const store = createStore({
  state: {
    itemsOnCart: [],
  },
  getters: {
    itemsCart: (state) => {
      return state.itemsOnCart;
    },
  },
  mutations: {
    increment(state, item) {
      state.itemsOnCart.push(item);
    },
    deleteAll(state) {
      state.itemsOnCart = [];
    },
  },
});

createApp(App).use(router).use(store).mount("#app");
