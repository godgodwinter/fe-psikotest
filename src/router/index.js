// import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/pages/LoginYayasan'),
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
          path: '/sekolah',
          // component: DefaultLayout,
          name: 'Sekolah',
          component: () => import('@/views/yayasan/Sekolah.vue'),
        },
    ]},
    {
         path: '/:pathMatch(.*)*',
        // component: DefaultLayout,
        name: '404',
        component: () => import('@/views/pages/Page404.vue'),
      },
    //

  // {
  //   path: '/pages',
  //   redirect: '/pages/404',
  //   name: 'Pages',
  //   component: {
  //     render() {
  //       return h(resolveComponent('router-view'))
  //     },
  //   },
  //   children: [
  //     {
  //       path: '404',
  //       name: 'Page404',
  //       component: () => import('@/views/pages/Page404'),
  //     },
  //     {
  //       path: '500',
  //       name: 'Page500',
  //       component: () => import('@/views/pages/Page500'),
  //     },
  //     {
  //       path: 'login',
  //       name: 'Login',
  //       component: () => import('@/views/pages/Login'),
  //     },
  //     {
  //       path: 'register',
  //       name: 'Register',
  //       component: () => import('@/views/pages/Register'),
  //     },
  //   ],
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
