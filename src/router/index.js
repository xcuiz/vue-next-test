import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const Index = defineAsyncComponent(() => import(/* webpackChunkName: "index" */ '@/views/index/index.vue'));

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/index',
        component: Index
    }]
});

export default router;