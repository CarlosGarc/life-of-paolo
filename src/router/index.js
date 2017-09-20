import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Nav from '@/components/Nav';
import World from '@/components/World';

Vue.use(Router);

export default {
  router1: new Router({
    routes: [
      {
        path: '/',
        component: Nav,
        children: [
          {
            path: '',
            component: Hello,
          },
          {
            path: 'world',
            component: World,
          },
        ],
      },
      {
        path: '/world2',
        component: World,
      },
    ],
  }),
  router2: new Router({
    routes: [
      {
        path: '/',
        component: Nav,
        children: [
          {
            path: '',
            component: Hello,
          },
          {
            path: 'world',
            component: World,
          },
        ],
      },
      {
        path: '/world2',
        component: Hello,
      },
    ],
  }),
};
