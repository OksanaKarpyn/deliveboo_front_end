import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppListRestaurant from "./pages/AppListRestaurant.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/ListaRistoranti',
            name: 'Restaurant_list',
            component: AppListRestaurant
        }
    ]
});

export { router };

