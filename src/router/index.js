// vue-router3 创建路由写法
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/articles',
    component: () => import('../view/aritical.vue')
  },
  {
    path: '/message',
    component: () => import('../view/message.vue')
  },
  {
    path: '/home',
    component: () => import('../view/home.vue')
  },
  {
    path: '/diary',
    component: () => import('../view/diary.vue')
  },
  {
    path: '/layout',
    component: () => import('../view/index.vue')
  }
]
const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes
})
export default router