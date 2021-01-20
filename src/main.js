import Vue from 'vue'
import App from './App.vue'
import VueMermaid from './plugins/vueMermaid.js'

Vue.config.productionTip = false
Vue.use(VueMermaid)

new Vue({
  render: h => h(App)
}).$mount('#app')
