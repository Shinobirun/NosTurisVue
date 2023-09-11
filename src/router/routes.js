import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeView.vue';
import NotFound from '@/views/NotFoundView.vue';
import RegistroView from '@/views/RegistroView.vue';


const routes = [
  {
    path: '/',  
    name: 'Home',
    component: Home
  },
  {
    path: '/registro', 
    name: 'Registro',
    component: RegistroView // Asegúrate de que este sea el nombre correcto del componente
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