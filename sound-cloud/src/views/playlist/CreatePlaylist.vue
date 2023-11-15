<template>
  <form @submit.prevent="handleSubmit">
    <h4>Creat New Playlist</h4>
    <input type="text" required placeholder="Playlist title" v-model="title">
    <textarea required placeholder="Playlist description..." v-model="description"></textarea>
    <!-- Upload Playlist Image -->
    <label>Upload playlist cover image</label>
    <input type="file" @change="handleChange" required>
    <div class="error">{{fileError}}</div>
    <div class="error">{{error}}</div>
    <div class="btn-container"><button v-if="!isPending" class="btn-link">Create</button> <button v-else disabled>Saving</button></div>
  </form>
</template>

<script>
import {ref} from "vue";
import useStorage from "@/mixins/useStorage";
import {timestamp} from "@/firebase/config";
import useCollection from "@/mixins/useCollection";
import getUser from "@/mixins/getUser";
import {useRouter} from "vue-router";

export default {
  name: "CreatePlaylist",
  setup() {
    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const { url, filePath, uploadImage} = useStorage('covers')
    const {error, addDoc, playlistId} = useCollection('playlists')
    const {user} = getUser()
    const isPending = ref(null)
    const router = useRouter()

    const handleSubmit = async () => {
      if (file.value) {
        isPending.value = true
        await uploadImage(file.value)
        await addDoc({
          title : title.value,
          description: description.value,
          userId : user.value.uid,
          username : user.value.displayName,
          coverUrl : url.value,
          filePath : filePath.value,
          songs: [],
          createAt : timestamp()
        })
        isPending.value = null
        if (!error.value) {
          await router.push({name : "PlaylistDetail", params : {id : playlistId.value}})
        }
      }
    }

    // allowed file types
    const types = ['image/png', 'image/jpeg', 'image/jpg']
    const fileError = ref(null)

    const handleChange = (e) => {
      const selected = e.target.files[0]
      if (selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        fileError.value = "Please select image file (png or jpeg)"
        file.value = null
      }
    }

    return {title, description, fileError,error, handleSubmit, handleChange, isPending}
  }
}
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
input[type=file] {
  border: 0;
  padding: 0;
}
label{
  font-size: 14px;
  display: block;
  margin-top: 30px;
}
button{
  margin-top: 20px;
}

.btn-link {
  width: 50%
}

</style>