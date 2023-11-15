<template>
  <div v-for="playlist in playlists" :key="playlist.id">
    <router-link :to="{name : 'PlaylistDetail', params : {id : playlist.id}}">
      <div class="single">
        <div class="thumbnail" >
          <img :src="playlist.coverUrl">
        </div>
        <div class="info">
          <h3>{{playlist.title}}</h3>
          <p class="create-by">Created by {{playlist.username}}</p>
        </div>
        <div class="song-number">
          <p>{{playlist.songs.length}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ListviewComponent",
  props: ['playlists']
}
</script>

<style scoped>
.single {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background: white;
  margin: 16px 0;
  transition: all ease 0.2s;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(50,50,50,0.05);
}
.single:hover {
  box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
  transform: scale(1.02);
}
.thumbnail {
  max-width: 100px;
  max-height: 100px;
  overflow: hidden;
  border-radius: 10px;
}
img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.info {
  margin: 0 30px;
}
.song-number {
  margin-left: auto;
}

.create-by {
  color:#4f515a
}
</style>