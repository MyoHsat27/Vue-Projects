<template>
  <div v-if="posts">
    <div  class="post" v-for="post in posts" :key="post.id">
      <router-link :to="{name : 'Details', params: {id : post.id}}">
        <h4>{{post.title}}</h4>
      </router-link>
      <div>{{post.body.substring(0,100) + "..."}}</div>
      <span v-for="tag in post.tags" :key="tag">#{{tag}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: ['posts'],
}
</script>

<style scoped>

.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h4 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  background: #ff8800;
  margin-bottom: 10px;
  max-width: 400px;
  padding: 0 20px
}
</style>