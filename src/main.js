import Vue from 'vue'
import App from './App.vue'
import store from './store'
import JwPagination from 'jw-vue-pagination'
import VueDropdown from 'vue-dynamic-dropdown'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

Vue.component('jw-pagination', JwPagination)
Vue.component('vue-dropdown', VueDropdown)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
