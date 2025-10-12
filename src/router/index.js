import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/pages/index.vue' // importa o componente

const routes = [
  { path: '/', component: IndexPage } // usa a referência importada
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
