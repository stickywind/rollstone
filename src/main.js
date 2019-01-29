// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// font-awesome
import 'font-awesome/css/font-awesome.min.css'
// iconfont
import '@/assets/css/iconfont.css'
// import VueFeatherIcon from 'vue-feather-icon'

// Vue.use(VueFeatherIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
