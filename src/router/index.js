import { createRouter, createWebHistory } from 'vue-router'

const Index = () =>
  import(/* webpackChunkName: "index" */ '@/views/index/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
  ],
})

export default router
