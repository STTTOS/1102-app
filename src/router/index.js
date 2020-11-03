import Vue from 'vue'
import VueRouter from 'vue-router'

import defaultPage from '@/pages/default';
import produceList from '@/views/produceList';
Vue.use(VueRouter)

const routes = [
 {
   path: '/',
   component: defaultPage,
   name: 'defaultPage',
   children: [
    {
      path: '',
      component: produceList,
      name: 'index'
    },
    {
      path: 'dispatch',
      component: () => import('@/views/dispatch'),
      name: 'dispatch'
    },
    {
      path: 'orders',
      component: () => import('@/views/orders'),
      name: 'orders'
    },
   ]
 },
 {
   path: '/test',
   component: () => import('@/pages/test'),
   name: 'testPage'
 },
 {
  path: '*',
  redirect: { name: 'index' },
},
]

const router = new VueRouter({
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
