import Vue from 'vue'
import App from './App.vue'

//Trae el framework bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Importar el css
import './main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
