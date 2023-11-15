<template>
  <div class="navbar">
    <nav>
      <router-link :to="{name: 'Home'}" class="brand"><img class="brand-icon" src="../assets/Soundcloud_logo.svg.png" alt=""></router-link>
      <div class="links">
        <div class="playlistHandle" v-if="user">
          <router-link class="playlist-create" :to="{name : 'CreatePlaylist'}">Create Playlist</router-link>
          <router-link class="playlist-create" :to="{name : 'UserPlaylists'}">My Playlist</router-link>
          <div class="setting-container">
            <div class="profile-picture-container" @click="showFunction = !showFunction" >
              <img v-if="user.photoURL" class="profile-picture" :src="user.photoURL" :alt="user.displayName">
              <div v-if="!user.photoURL && user.displayName" class="no-profile-picture">{{user.displayName.charAt(0).toUpperCase()}}</div>
            </div>
            <div v-if="showFunction" class="settings">
              <div class="setting-username">{{user.displayName}}</div>
              <div  @click="handleLogout" class="setting-link">Logout</div>
            </div>
          </div>
        </div>
        <div v-else>
          <router-link  :to="{ name : 'Signup'}" class="btn-link">Signup</router-link>
          <router-link :to="{ name: 'Login' }" class="btn-link ">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/mixins/useLogout";
import {useRouter} from "vue-router";
import getUser from "@/mixins/getUser";
import {ref} from "vue";

export default {
  name: "NavbarComponent",
  setup () {
    const {error, logout} = useLogout()
    const router = useRouter()
    const {user} = getUser()
    const showFunction = ref(false)

    const handleLogout = async () => {
      await logout()
      if (!error.value) {
        await router.push({name : "Login"})
        showFunction.value = false
      }
    }

    return {handleLogout, user, showFunction, }
  },
}
</script>

<style scoped>
.brand{
  color: #e69c24;
  display: flex;
  justify-content: center;
}
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.brand-icon {
  margin-left: 30px;
  max-height: 30px;
}

nav .links {
  margin-left: auto;
}

nav .links a, button {
  margin-left: 10px;
  font-size: 14px;
}

.playlistHandle {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right : 10px
}

.playlist-create {
  margin-right:10px;
  color: var(--primary)
}

.setting-container {
  width : 45px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.setting-username {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #acacac;
  margin: 3px 0px;
  color: #9a9a9a
}

.settings {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: white;
  position: absolute;
  bottom: -75px;
  right: 5px;
  box-shadow: 0px 0px 5px 1px rgba(50,50,50,0.1);
  border-radius: 3px;
  padding: 12px 15px;
  margin: 0;
  width: 100px
}

.setting-link {
  margin: 3px 0px;
  cursor: pointer;
  transition: all 0.1s;
}

.setting-link:hover {
  color: var(--primary)
}

.profile-picture-container {
  width: 45px;
  height: 45px;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 !important;
  cursor: pointer;
}

.profile-picture {
  margin: 0;
  width: 100%;
  height: 100%;
}

.no-profile-picture {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-top: 3px;
  color: white;
  background: #ffb932;
  border-radius: 100%;
}

@media (max-width: 550px) {
  .brand-icon {
    max-height: 25px;
    margin-left: 10px;
  }

  .playlist-create {
    margin-right:10px !important;
    color: var(--primary)
  }
}

@media (max-width: 448px) {
  .brand-icon {
    max-height: 20px;
    margin-left: 10px;
  }
}

</style>