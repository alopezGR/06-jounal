import { createRouter, createWebHistory } from "vue-router";
import daybookRouter from '@/modules/daybook/router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/daybook',
        ...daybookRouter
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router