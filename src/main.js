import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from "axios";
import VueAxios from "vue-axios";
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)


Vue.use(VueAxios, axios);
axios.defaults.headers.common={'Access-Control-Allow-Origin' : '*',"X-Requested-With":"XMLHttpRequest"};

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})



