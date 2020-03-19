import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('./containers/TodoList/TodoList.vue')
  }, {
    path: '*',
    component: () => import('./containers/NotFoundPage/NotFoundPage.vue')
  }]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
