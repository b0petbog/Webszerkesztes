import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/newtask/:id',
      name: 'Új feladat',
      component: () => import('../views/NewTaskView.vue'),
    },
    {
      path: '/ediktask/:id',
      name: 'Szerkesztés',
      component: () => import('../views/EditTaskView.vue'),
    },
  ],
})

export default router
