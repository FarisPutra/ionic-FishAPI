import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
// import HomePage from '../views/HomePage.vue'
// import PondsPage from '../views/Page2.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'ponds',
        component: () => import('@/views/PondsPage.vue')
      },
      {
        path: 'page3',
        component: () => import('@/views/Page3.vue')
      },
      {
        path: 'page4',
        component: () => import('@/views/Page4.vue')
      }
    ]
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: HomePage
  // },
  // {
  //   path: '/ponds',
  //   name: 'Ponds',
  //   component: PondsPage
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
