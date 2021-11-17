import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import PayPal from '../views/PayPal.vue'
import Product from '../views/Product.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/auth/register', component:Register },
  { path: '/auth/login', component:Login },
  { path: '/auth/:provider/callback', component:Login },
  { path: '/paypal', component:PayPal },
  { path: '/product/:id',name:'product' ,component:Product,props: true },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
