import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CircleOfKeys from '@/views/CircleOfKeys.vue'

const AboutView = () => import('../views/AboutView.vue')

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView},
  { path: '/circle-of-keys', name: 'circle-of-keys', component: CircleOfKeys},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
