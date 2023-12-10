import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Error from './pages/Error.vue';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error
    }
  ]
});

export { router };