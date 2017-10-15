import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// TODO: Import the Survey component
// TODO: Import the Secret component

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // Add the Survey route definition
    // Add the Secret route definition
  ]
})
