<template>
  <div class="add-song">
    <button v-if="!showForm" class="btn-link" @click="showForm = true">Add Song</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <div class="cancel-btn" @click="showForm = false">x</div>
      <h4>Add a New Song</h4>
      <input type="text" placeholder="Song Title" required v-model="title">
      <input type="text" placeholder="Artist" required v-model="artist">
      <div v-if="error || fileError || songUploadError" class="error">{{error}} {{fileError}} {{songUploadError}}</div>
      <input type="file" @change="handleChange">
      <button v-if="!isPending">Add</button>
      <button v-else disabled>Loading</button>
    </form>
  </div>
</template>

<script>
import {ref} from "vue";
import {v4 as uuidv4} from "uuid";
import useDocument from "@/mixins/useDocument";
import useStorage from "@/mixins/useStorage";
export default {
  name: "AddSong",
  props: ["playlist"],
  setup(props) {
    const title = ref("")
    const artist = ref("")
    const songFile = ref(null)
    const showForm = ref(false)
    const isPending = ref(false)
    const {error : songUploadError, url, filePath, uploadSong} = useStorage("songs")
    const {error, updateDoc} = useDocument('playlists', props.playlist.id)

    const handleSubmit = async () => {
      if (songFile.value) {
        isPending.value = true
        await uploadSong(songFile.value)
        if (!songUploadError.value) {
          const newSong = {
            title: title.value,
            artist: artist.value,
            id : uuidv4(),
            songUrl : url.value,
            filePath : filePath.value,
            fileName : songFile.value.name
          }
          await updateDoc({
            songs: [...props.playlist.songs, newSong]
          })
          if (!error.value) {
            title.value = ""
            artist.value = ""
            songFile.value = null
            isPending.value = false
          }
        }
      }
    }

    // Get upload File
    const fileError = ref(null)
    const types = ["audio/mpeg", "audio/x-m4a"]
    const handleChange = (e) => {
      const selected = e.target.files[0]
      console.log(selected.type)
      if (selected && types.includes(selected.type)) {
        songFile.value = selected
        fileError.value = null
      } else {
        fileError.value = "Please select song file (only .mp3)"
        songFile.value = error
      }
    }


    return {title, artist, showForm, handleSubmit, error, isPending, handleChange, fileError, songUploadError}
  }
}
</script>

<style scoped>
.add-song {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

form {
  max-width: 90%;
  text-align: center;
}

.cancel-btn {
  margin-left: auto;
  margin-bottom: 10px;
  background: var(--secondary);
  color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: end;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.1s;
}

.cancel-btn:hover {
  color: var(--secondary);
  background: #f2985c
}
</style>