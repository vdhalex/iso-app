import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Callback from '../components/Callback'
import Team from '../components/Team/Team'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    }
  ]
})

export default router
