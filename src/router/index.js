import HomePage from '@/pages/HomePage.vue'
import DinoPage from '@/pages/DinoPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/dinosaur-info/:id', component: DinoPage, props: true },
  ],
})

export default router
