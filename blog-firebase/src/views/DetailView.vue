<template>
  <div v-if="error">{{error}}</div>
  <template v-else>
    <div v-if="post" class="post">
      <h3>{{post.title}}</h3>
      <p class="pre">{{post.body}}</p>
    </div>
    <div v-else><LoadSpinner></LoadSpinner></div>
  </template>
  <button class="delete" @click="deleteBlog">Delete Blog</button>
</template>

<script>
import getPost from "@/composables/getPost";
import {useRoute, useRouter} from 'vue-router'
import LoadSpinner from "@/components/LoadSpinner";
import {projectFirestore} from "@/firebase/config";
export default {
  name: "DetailView",
  components: {LoadSpinner},
  props: ['id'],
  setup(props) {
    const route = useRoute()
    const router = useRouter()

    let {post, error, load} = getPost(route.params.id)
    load()

    const deleteBlog = async () => {
      await projectFirestore.collection("posts")
          .doc(props.id)
          .delete()

      await router.push({name: "Home"})
    }


    return {
      post,error, deleteBlog
    }
  }
}
</script>

<style scoped>
.post {
  max-width: 1200px;
  margin: 0 auto;
}

.post p {
  color: #444;
  line-height: 1.5rem;
}

.pre {
  white-space: pre-wrap;
}

.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  background: #ff8800;
  margin-bottom: 10px;
  max-width: 400px;
  padding: 0 20px
}

button.delete {
  margin: 10px auto;
  color: white;
  background: #ff8800;
  padding: 5px 8px;
  border: none;

}

</style>