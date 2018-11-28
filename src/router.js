import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import homeJumbotron from './views/Jumbotron.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'main',
      component: Home,
    },
    {
      path: '/:nameModule/',
      name: 'firstModule',
      component: homeJumbotron,
      props: true,
    },
  ],
});