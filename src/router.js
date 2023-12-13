import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppListRestaurant from "./pages/AppListRestaurant.vue";
import AppSingleRestaurants from './pages/AppSingleRestaurants.vue';
import AppPayments from './pages/AppPayments.vue';

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
        },
        {
            path: '/singleRestaurant/:id',
            name: 'AppSingleRestaurants',
            component: AppSingleRestaurants
        },
        {
            path: '/pagamento',
            name: 'Payment',
            component: AppPayments
        }
    ]
});

export { router };

