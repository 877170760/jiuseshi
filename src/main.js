import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
let vConsole = null;
vConsole = new VConsole()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
