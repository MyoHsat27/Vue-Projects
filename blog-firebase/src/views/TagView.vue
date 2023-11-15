<template>
  <div class="tag">
    <div v-if="error"> {{error}} </div>
    <div v-if="posts.length" class="layout">
      <PostComponent :posts="tagPosts"></PostComponent>
      <TagCloud :posts="posts"></TagCloud>
    </div>
    <div v-else><LoadSpinner></LoadSpinner></div>
  </div>
</template>

<script>
import getPosts from "@/composables/getPosts";
import {useRoute} from "vue-router";
import {computed} from "vue";
import PostComponent from "@/components/PostComponent";
import TagCloud from "@/components/TagCloud";
import LoadSpinner from "@/components/LoadSpinner";
export default {
  name: "TagComponent",
  components: {PostComponent, TagCloud, LoadSpinner},
  setup() {
    const route = useRoute()
    const {posts, error, load} = getPosts()
    load()

    const tagPosts = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag))
    })

    return {
      posts, error, tagPosts
    }
  }
}
</script>

<style scoped>

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>