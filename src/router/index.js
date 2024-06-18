// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/front/HomeView.vue'),
        meta: {
          title: '首頁'
        }
      },
      {
        path: 'movie',
        name: 'Movie',
        component: () => import(/* webpackChunkName: "movie" */ '@/views/front/Movie.vue'),
        meta: {
          title: '電影時刻'
        }
      },
      {
        path: 'store',
        name: 'Store',
        component: () => import(/* webpackChunkName: "store" */ '@/views/front/Store.vue'),
        meta: {
          title: '點數兌換'
        }
      },
      // {
      //   path: 'spa',
      //   name: 'Spa',
      //   component: () => import(/* webpackChunkName: "spa" */ '@/views/front/Spa.vue'),
      //   meta: {
      //     title: '溫泉'
      //   }
      // },
      // {
      //   path: 'spaz',
      //   name: 'Spaz',
      //   component: () => import(/* webpackChunkName: "spaz" */ '@/views/front/Spaz.vue'),
      //   meta: {
      //     title: '選擇溫泉'
      //   }
      // },
      // {
      //   path: 'personal',
      //   name: 'Personal',
      //   component: () => import(/* webpackChunkName: "personal" */ '@/views/front/Personal.vue'),
      //   meta: {
      //     title: '個人湯'
      //   }
      // },
      // {
      //   path: 'people',
      //   name: 'People',
      //   component: () => import(/* webpackChunkName: "people" */ '@/views/front/People.vue'),
      //   meta: {
      //     title: '大眾湯'
      //   }
      // },
      // {
      //   path: 'register',
      //   name: 'Register',
      //   component: () => import(/* webpackChunkName: "register" */ '@/views/front/Register.vue'),
      //   meta: {
      //     title: '註冊'
      //   }
      // },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/front/Login.vue'),
        meta: {
          title: '登入'
        }
      },
    ],
  },
  // {
  //   path: '/admin',
  //   component: () => import('@/layouts/AdminLayout.vue'),
  //   children: [
  //     {
  //       path: '',
  //       name: 'AdminHome',
  //       component: () => import(/* webpackChunkName: "admin-home" */ '@/views/back/AdminHome.vue'),
  //       meta: {
  //         title: '住戶管理'
  //       }
  //     },
  //     {
  //       path: 'adminproducts',
  //       name: 'AdminProducts',
  //       component: () => import(/* webpackChunkName: "admin-products" */ '@/views/back/adminproducts.vue'),
  //       meta: {
  //         title: '商品管理'
  //       }
  //     },
  //   ],
  // }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
