<template>
  <div class="create">
    <form  @submit.prevent="createPost">
      <label for="title">Title : </label>
      <input v-model="title" type="text" id="title" required>
      <label for="content">Content : </label>
      <textarea v-model="body" id="content" required></textarea>
      <label>Tags (hit space to add a tag)</label>
      <input v-model="tag" type="text" @keyup.space="addTag">
      <span v-for="tag in tags" :key="tag" class="pill">#{{tag}}</span>
      <button>Create Blog</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router"
import {projectFirestore, timestamp} from "@/firebase/config";
export default {
  name: "CreateView",
  setup() {
    const title = ref("")
    const body = ref("")
    const tag = ref("")
    const tags = ref([])
    const router = useRouter()

    function addTag () {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/,'')
        tags.value.push(tag.value)
      }
      tag.value = ""
    }

    const createPost = async() => {
      const post = {
        title : title.value,
        body : body.value,
        tags: tags.value,
        createdAt : timestamp()
      }

      const respond = await projectFirestore.collection('posts').add(post)

      await router.push('/')

    }

    return {
      title, body, tag, tags, addTag, createPost
    }

  }
}
</script>

<style scoped>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #ff8800;
  margin-bottom: 10px;
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}</style>