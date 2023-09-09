import { createRouter, createWebHistory } from 'vue-router'
import Checker from '../views/Checker.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/checker',
      name: 'checker',
      component: Checker
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router
