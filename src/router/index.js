import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views'
import ElementIcon from '@/views/element/icon'
import ElementQuote from '@/views/element/quote'
import ElementBadge from '@/views/element/badge'
import ElementI18n from '@/views/element/i18n'
import FormButton from '@/views/form/button'
import FormSwitch from '@/views/form/switch'
import FormPayInput from '@/views/form/payinput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Views',
      component: Views
    },
    // element
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
      path: '/ElementBadge',
      name: 'ElementBadge',
      component: ElementBadge
    },
    {
      path: '/ElementI18n',
      name: 'ElementI18n',
      component: ElementI18n
    },
    // form
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
      path: '/FormPayInput',
      name: 'FormPayInput',
      component: FormPayInput
    }
  ]
})
