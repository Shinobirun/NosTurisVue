import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import NotFound from '@/views/NotFoundView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  // Agrega más rutas aquí si es necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
