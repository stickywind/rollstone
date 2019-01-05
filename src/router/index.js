import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views'
import FormButton from '@/views/form/button'

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
    }
  ]
})
