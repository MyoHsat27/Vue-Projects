import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/auth/LoginView";
import SignupView from "@/views/auth/SignupView";
import CreatePlaylist from "@/views/playlist/CreatePlaylist";

// route guard
import {projectAuth} from "@/firebase/config";
import PlaylistDetail from "@/views/playlist/PlaylistDetail";
import userPlaylist from "@/views/playlist/userPlaylist";
const requireAuth =  (to, from,next) => {
  let user =  projectAuth.currentUser
  if (!user) {
    next({name: "Login"})
  } else {
    next()
  }
}

const requireNoAuth = (to,from,next) => {
  let user = projectAuth.currentUser
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
    beforeEnter: requireAuth
  },
  {
    path: "/login",
    name : 'Login',
    component: LoginView,
    beforeEnter: requireNoAuth
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupView,
    beforeEnter: requireNoAuth
  },
  {
    path: "/playlists/create",
    name : "CreatePlaylist",
    component: CreatePlaylist,
    beforeEnter : requireAuth
  },
  {
    path: "/playlists/:id",
    name : "PlaylistDetail",
    component: PlaylistDetail,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: "/playlists/user",
    name : "UserPlaylists",
    component: userPlaylist,
    beforeEnter: requireAuth

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
