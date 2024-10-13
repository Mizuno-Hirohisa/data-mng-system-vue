import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import Edit from './components/pages/Edit.vue'
import Search from './components/pages/Search.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/search', name: 'Search', component: Search },
  { path: '/edit', name: 'Edit', component: Edit },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router