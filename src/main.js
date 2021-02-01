import Vue from 'vue'
import App from './App.vue'
import VueMermaid from './plugins/vueMermaid.js'

require('@/assets/main.scss');

Vue.config.productionTip = false
Vue.use(VueMermaid, {
  startOnLoad: true,
  securityLevel: 'loose'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
