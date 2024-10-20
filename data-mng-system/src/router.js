import { createRouter, createWebHistory } from 'vue-router'
import Edit from './components/pages/Edit.vue'
import Search from './components/pages/Search.vue'

const routes = [
  { path: '/', redirect: '/search' },
  { path: '/search', name: 'Search', component: Search },
  { path: '/edit', name: 'Edit', component: Edit },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router