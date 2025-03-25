import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import Ceshi2 from '../views/device11.vue'
import Ceshi3 from '../views/device12.vue'
import Ceshi4 from '../views/device21.vue'
import Ceshi5 from '../views/device22.vue'
import Ceshi6 from '../views/device31.vue'
import Login from '../views/login.vue'
import Layout from '../layout/index.vue'
import readwritetest from '../views/readwritetest.vue'
import Cookies from 'js-cookie'

const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    meta: { requiresAuth: true },
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'ceshi2',
        component: Ceshi2
      },
      {
        path: 'ceshi3',
        component: Ceshi3
      },
      {
        path: 'ceshi4',
        component: Ceshi4
      },
      {
        path: 'ceshi5',
        component: Ceshi5
      },
      {
        path: 'ceshi6',
        component: Ceshi6
      },
      {
        path: 'readwritetest',
        component: readwritetest
      },
    ]
  }
]

export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录',
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoutes, ...dynamicRoutes]
})

// 导航守卫
router.beforeEach((to, from, next) => {
  let loggedIn = Cookies.get('loggedIn')
  if (loggedIn === undefined) {
    Cookies.set('loggedIn', 'false')
    loggedIn = 'false'
  }
  if (to.path !== '/login' && loggedIn !== 'true') {
    next('/login')
  } else {
    next()
  }
})

export default router