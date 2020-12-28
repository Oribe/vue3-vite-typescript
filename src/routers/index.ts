import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Login from '../components/Login.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: HelloWorld },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
