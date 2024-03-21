import { createRouter, createWebHistory } from 'vue-router'
import Ex00View from '../views/Ex00View.vue'
import Ex01View from '../views/Ex01View.vue'
import Ex02View from '../views/Ex02View.vue'
import Ex03View from '../views/Ex03View.vue'
import Ex04View from '../views/Ex04View.vue'
import Ex05View from '../views/Ex05View.vue'
import Ex06View from '../views/Ex06View.vue'
import Ex07View from '../views/Ex07View.vue'
import Ex08View from '../views/Ex08View.vue'
import Ex09View from '../views/Ex09View.vue'

const routes = [
  {
    path: '/',
    name: 'ex00',
    component: Ex00View
  },
  {
    path: '/1',
    name: 'ex01',
    component: Ex01View
  },
  {
    path: '/2',
    name: 'ex02',
    component: Ex02View
  },
  {
    path: '/3',
    name: 'ex03',
    component: Ex03View
  },
  {
    path: '/4',
    name: 'ex04',
    component: Ex04View
  },
  {
    path: '/5',
    name: 'ex05',
    component: Ex05View
  },
  {
    path: '/6',
    name: 'ex06',
    component: Ex06View
  },
  {
    path: '/7',
    name: 'ex07',
    component: Ex07View
  },
  {
    path: '/8',
    name: 'ex08',
    component: Ex08View
  },
  {
    path: '/9',
    name: 'ex09',
    component: Ex09View
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
