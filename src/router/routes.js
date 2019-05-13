import Home from '@/views/home/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/user/Login.vue')
  },
  {
    path: '/exception/404',
    name: 'exception404',
    component: () => import('@/views/exception/404.vue')
  }
]