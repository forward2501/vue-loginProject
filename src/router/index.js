import { createRouter, createWebHashHistory } from 'vue-router'
import AppLogin from '../views/AppLogin.vue'
import AppHome from '../views/AppHome.vue'
import AppAdd from '../views/AppAdd.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: AppLogin
  },
  {
    path: '/home',
    name: 'home',
    component: AppHome,
    children: [
      {
        path: 'list',
        name: 'list',
        // 懒加载
        component: () => import('../views/AppList.vue')
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/AppUser.vue')
      }
    ]
  },
  {
    path: '/add',
    name: 'add',
    component: AppAdd
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
