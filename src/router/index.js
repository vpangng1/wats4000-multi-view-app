import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Survey from '@/components/Survey'
import Secret from '@/components/Secret'
// TODO: Import the Secret component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Survey',
      name: 'Survey',
      component: Survey
    },
    {
      path: '/Secret',
      name: 'Secret',
      component: Secret
    }
  ]
})
