// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
// font-awesome
import 'font-awesome/css/font-awesome.min.css'
// iconfont
import '@/assets/css/iconfont.css'
// import VueFeatherIcon from 'vue-feather-icon'

// i18n locales
import localeZH from './common/locales/zh.json'
import localeEN from './common/locales/en.json'

// Vue.use(VueFeatherIcon)
Vue.use(VueI18n)

// i18n
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    zh: localeZH,
    en: localeEN
  }
})

Vue.prototype.$lang = i18n

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
