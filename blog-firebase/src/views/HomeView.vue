<template>
  <div class="home">
    <div v-if="error">{{error}}</div>
    <template v-else>
      <div v-if="posts.length" class="layout">
        <PostComponent :posts="posts"></PostComponent>
        <TagCloud :posts="posts"></TagCloud>
      </div>
      <div v-else><LoadSpinner></LoadSpinner></div>
    </template>
  </div>
</template>

<script>
import PostComponent from "@/components/PostComponent";
import TagCloud from "@/components/TagCloud";
import getPost from "@/composables/getPosts";
import LoadSpinner from "@/components/LoadSpinner";
export default {
  name: 'HomeView',
  components: {PostComponent, TagCloud, LoadSpinner},

  setup() {
    let {posts, error, load} = getPost()
    load()

    return {
      posts,error
    }
  }
}

</script>

<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>