import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from "@/components/NotFound";
import DetailView from "@/views/DetailView";
import createView from "@/views/CreateView";
import TagView from "@/views/TagView";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: DetailView,
    props: true
  },
  {
    path: "/create",
    name: "Create",
    component: createView
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: TagView
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
