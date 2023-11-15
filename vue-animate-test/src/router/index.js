import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ContactView from "@/views/ContactView";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
