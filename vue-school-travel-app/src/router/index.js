import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Brazil from '@/views/Brazil.vue'
import Panama from '@/views/Panama.vue'
import Hawaii from '@/views/Hawaii.vue'
import Jamaica from '@/views/Jamaica.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/brazil', name: 'brazil', component: Brazil },
    { path: '/jamaica', name: 'jamaica', component: Jamaica },
    { path: '/hawaii', name: 'hawaii', component: Hawaii },
    { path: '/panama', name: 'panama', component: Panama },
  ]
})

export default router
