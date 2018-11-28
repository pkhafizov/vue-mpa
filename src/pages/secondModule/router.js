import Vue from 'vue';
import Router from 'vue-router';
import SJumbotron from './views/Sjumbotron.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/:nameModule/',
    name: 'sModule',
    component: SJumbotron,
    props: true,
  }, ],
});