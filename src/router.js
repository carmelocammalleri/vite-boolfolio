import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Error from './pages/Error.vue';
import Projects from './pages/Projects.vue';
import Contacts from './pages/Contacts.vue';
import Details from './pages/Details.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
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
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error
    }
  ]
});

export { router };