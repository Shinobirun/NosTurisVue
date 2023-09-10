import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';  // Importa createRouter y createWebHistory
import Home from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // Agrega más rutas aquí si es necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .mount('#app')