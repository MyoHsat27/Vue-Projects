<template>
  <div v-if="loadError" class="error">{{loadError}}</div>

  <div v-if="playlist" class="playlist-details">
    <!--Playlist Information-->
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" :alt="playlist.title">
      </div>
      <h2>{{playlist.title}}</h2>
      <p class="username">Created By {{playlist.username}}</p>
      <p class="description">{{playlist.description}}</p>
      <div v-if="deleteError || imageDeleteError" class="error">{{deleteError}} {{imageDeleteError}}</div>
      <div v-if="ownership" class="btn-link" @click="handlePopup">Delete Playlist</div>
      <DeletePopup :open="isOpen" :isPending="isPending" @isCancel="handlePopup" @isDelete="handleDelete"></DeletePopup>
    </div>
    <!--Song List-->
    <div class="song-list" ref="songListContainer">
      <div v-if="!playlist.songs.length" class="no-song">No Song have been added to this playlist yet</div>
      <template v-else>
        <div v-for="song in playlist.songs" :key="song.id" class="single-song">
          <div class="details">
            <h3>{{song.title}}</h3>
            <p>{{song.artist}}</p>
          </div>
          <div v-if="deleteSongError" class="error">{{deleteSongError}}</div>
          <div class="btn-container">
            <button disabled v-if="isDownloading">Downloading</button>
            <button class="song-delete-btn btn-link" @click="singleDownload(song.songUrl, song.fileName)">Download</button>
            <button v-if="ownership" class="song-delete-btn btn-link" @click="deleteSong(song.id, song.filePath)">Delete</button>
          </div>
          </div>
      </template>
      <AddSong v-if="ownership" :playlist="playlist"></AddSong>
    </div>
  </div>
</template>

<script>
import getDocument from "@/mixins/getDocument";
import getUser from "@/mixins/getUser";
import useDocument from "@/mixins/useDocument";
import AddSong from "@/components/AddSong";
import {computed, ref} from "vue";
import DeletePopup from "@/components/DeletePopup";
import {useRouter} from "vue-router";
import useStorage from "@/mixins/useStorage";

export default {
  name: "PlaylistDetail",
  components: {DeletePopup,AddSong},

  props: ['id'],
  setup(props) {
    // Load Playlist
    const {error : loadError, document : playlist} = getDocument('playlists', props.id)
    const {user} = getUser()

    const ownership = computed(() => {
      return playlist.value && user.value && user.value.uid === playlist.value.userId
    })

    // Delete Playlist Info
    const {error : deleteError, deleteDoc} = useDocument('playlists', props.id)
    // Delete Playlist Cover
    const {error : imageDeleteError, deleteImage, isPending} = useStorage()
    const { deleteStorageSong } = useStorage()
    const isOpen = ref(false)
    const router = useRouter()
    const handlePopup =  () => {
      isOpen.value = !isOpen.value
    }
    const handleDelete = async () => {
      await deleteImage(playlist.value.filePath)
      await deleteDoc()
      if (!deleteError.value && !imageDeleteError.value) {
        isOpen.value = !isOpen.value
        await router.push({name: "Home"})
      }
    }

    // Delete Song
    const {error: deleteSongError,updateDoc} = useDocument("playlists", props.id)
    const deleteSong = async (id, filePath) => {
      const songs = playlist.value.songs.filter((song) => song.id !== id)
      await updateDoc({songs})
      await deleteStorageSong(filePath)
    }

    // Download Song
    const isDownloading = ref(false)
    const singleDownload = async (url, name) => {
      const aTag = document.createElement("a")
      aTag.setAttribute("download", name);
      aTag.href = url
      aTag.setAttribute('target', '_blank');
      aTag.click()
    }

    return {
      loadError, playlist, ownership,
      deleteError, imageDeleteError, isPending,
      handlePopup, isOpen,
      handleDelete, deleteSong, deleteSongError,
      singleDownload, isDownloading

    }

  }
}
</script>

<style scoped>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 160px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 200%;
  max-height: 200%;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
 /*Hide scrollbar for Chrome, Safari and Opera */
.song-list::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.song-list {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.song-list {
  overflow-y: scroll;
  height: 504px;
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.05) inset;
}
.no-song {
  height: 30%;
  background: #ebebeb;
  color: #878787;
  border-radius: 6px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.single-song{
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #dbdbdb;
  margin-bottom: 20px;
}
.btn-container {
  display: flex;
  flex-direction: column;
}
.song-delete-btn {
  width: 100px;
}

@media (max-width: 750px) {
  .playlist-details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 80px;
  }
  .song-list{
    overflow: unset;
    box-shadow: none;
    padding-bottom: 10px;
    height: auto;
  }
}
</style>