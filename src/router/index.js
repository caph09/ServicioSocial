import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/bolsa',
    name: 'bolsa',
    component: () => import( '../views/BolsaServicio.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import( '../views/Perfil.vue')
  },
  {
    path: '/dashboard',
    name: 'dasboard',
    component: () => import( '../views/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
