import Vue from 'vue'
import App from './App.vue'
import ImgCropper from './components/ImgCropper'
import BootstrapVue from 'bootstrap-vue'
import VueFormBuilder from '@uwlajs/vue-form-builder'
import Multiselect from 'vue-multiselect'
import vueAnkaCropper from 'vue-anka-cropper'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueFormBuilder)
Vue.component('multiselect', Multiselect)
Vue.component('img-cropper', ImgCropper)
Vue.component('vue-anka-cropper', vueAnkaCropper)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')