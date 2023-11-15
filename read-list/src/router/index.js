import { createRouter, createWebHistory } from 'vue-router'
// view components
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import SignupView from "@/views/SignupView";

// firebase imports
import {auth} from "@/firebase/config";

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
    next()
  } else {
    next({name : "Login"})
  }
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    next()
  } else {
    next({name : "Home"})
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter : requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    beforeEnter: requireNoAuth
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView,
    beforeEnter: requireNoAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
