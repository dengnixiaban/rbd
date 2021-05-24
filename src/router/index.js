import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('@/views/home/index.vue')
  },
  {
    path: '/mime',
    name: 'Mime',   
    component: () => import( '@/views/mime/index.vue')
  },
  {
    path: '/category',
    name: 'Category',   
    component: () => import( '@/views/category/index.vue')
  },
  {
    path: '/cart',
    name: 'Cart',   
    component: () => import( '@/views/cart/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
