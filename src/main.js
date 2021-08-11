import Vue from 'vue'
import App from './App.vue'

import '@/assets/tailwind.css'

//create an eventBus
export const eventBus = new Vue();

//create an error eventBus
export const errorBus = new Vue();

// //Vue.use(vueCustomElement);
// if ( !window.localStorage.getItem('whoobe-cms') ){
//   window.localStorage.setItem('whoobe-cms' , process.env.VUE_APP_API_URL )
//   window.localStorage.setItem('whoobe-mode' , process.env.VUE_APP_LOCAL )
//}

//import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
