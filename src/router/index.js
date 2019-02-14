import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views'
import FormButton from '@/views/form/button'
import FormSwitch from '@/views/form/switch'
import ElementIcon from '@/views/element/icon'
import ElementQuote from '@/views/element/quote'
import ElementI18n from '@/views/element/i18n'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Views',
      component: Views
    },
    {
      path: '/FormButton',
      name: 'FormButton',
      component: FormButton
    },
    {
      path: '/FormSwitch',
      name: 'FormSwitch',
      component: FormSwitch
    },
    {
      path: '/ElementIcon',
      name: 'ElementIcon',
      component: ElementIcon
    },
    {
      path: '/ElementQuote',
      name: 'ElementQuote',
      component: ElementQuote
    },
    {
      path: '/ElementI18n',
      name: 'ElementI18n',
      component: ElementI18n
    }
  ]
})
