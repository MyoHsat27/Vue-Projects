<template>
  <div class="user-playlist">
    <h2>My Playlist</h2>
    <div v-if="playlists">
      <ListviewComponent :playlists="playlists"></ListviewComponent>
    </div>
    <div class="btn-container">
      <router-link to="CreatePlaylist" class="btn-link">Create a New Playlist</router-link>
    </div>
  </div>
</template>

<script>
import getCollection from "@/mixins/getCollection";
import getUser from "@/mixins/getUser";
import ListviewComponent from "@/components/ListviewComponent";
export default {
  name: "userPlaylist",
  components: {ListviewComponent},

  setup() {
    const {user} = getUser()
    const {documents: playlists} = getCollection(
        'playlists',
        ['userId', "==", user.value.uid]
    )

    return {playlists}
  }

}
</script>

<style scoped>
.btn-container {
  margin-top: 50px;

}
</style>