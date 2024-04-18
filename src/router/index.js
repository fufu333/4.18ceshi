import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 引入组件
import HomePage from '../components/HomePage.vue'
import ProfilePage from '../components/ProfilePage.vue'
import Ceshi from '../components/Ceshi.vue'
import App from '../App.vue';

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/ceshi',
    name: 'Ceshi',
    component: Ceshi
  }
]

// 创建路由器实例
const router = createRouter({
  history: createWebHashHistory(), 
  routes
})
export default router
