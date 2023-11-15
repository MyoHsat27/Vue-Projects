import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView";
import WelcomeWarningView from "@/views/WelcomeWarningView";
import WelcomeView from "@/views/WelcomeView";
import HappyBirthdayView from "@/views/HappyBirthdayView";

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/warning',
    name: 'warning',
    component: WelcomeWarningView
  },
  {
    path: "/welcome",
    name: "welcome",
    component: WelcomeView
  },
  {
    path: "/happy-birthday",
    name: "happy-birthday",
    component: HappyBirthdayView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
