import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/index.vue'
import About from '@/views/about.vue'
import Showus from '@/views/showus.vue'
import Echo from '@/views/echo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/showus',
      name: 'showus',
      component: Showus,
    },
    {
      path: '/echo',
      name: 'echo',
      component: Echo,
    },
  ],
})

export default router
