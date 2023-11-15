<template>
  <div v-if="!isSignup" class="form">
    <h3 class="title">Sign up</h3>
    <div>
      <input type="text" placeholder="Username" v-model="username" required>
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" @keyup="handleError" v-model="password" required>
      <div class="error" v-if="errorSignup || errorGoogle">{{errorSignup}} {{errorGoogle}}</div>
      <div class="btn-container">
        <button v-if="!isPending" class="emailLogin" @click="handleSignup">Sign up</button>
        <button v-if="isPending" disabled>Loading</button>
        <button class="googleLogin" @click="loginGoogle"><img src="../../assets/1534129544.svg" class="google-icon" alt=""> <span>Continue with Google</span></button>
      </div>
    </div>
  </div>
  <div v-else class="form">
    <h3 class="title">Add your Profile Picture</h3>
    <div class="profile-container">
      <div class="no-profile">{{firstLetter}}</div>
    </div>
    <div class="profile-form-container">
      <label class="profile-label">Upload your profile picture</label>
      <div class="error">{{fileError}} {{errorAddProfile}}</div>
      <input ref="profilePicture" type="file" @change="getProfile" required>
      <button v-if="!uploadImagePending" class="profile-btn" @click="handleProfile">Submit</button>
      <button  v-else disabled class='profile-btn-load'>Loading</button>
    </div>
    <div class="skip-btn-container"><div  class="skip-btn" @click="handleSkip">Skip</div></div>
  </div>
</template>

<script>
import {ref} from "vue";
import useGoogleLogin from "@/mixins/useGoogleLogin";
import useSignup from "@/mixins/useSignup";
import {useRouter} from "vue-router";
import useStorage from "@/mixins/useStorage";
import getUser from "@/mixins/getUser";

export default {
  name: "SignupView",
  setup() {
    const router = useRouter()
    const {errorGoogle, googleLogin} = useGoogleLogin()
    const {error : errorSignup, signup, isPending} = useSignup()
    const username = ref("")
    const email = ref("")
    const password = ref("")
    const firstLetter = ref("")
    const isSignup = ref(false)

    const loginGoogle = async () => {
      const res = await googleLogin()
      if (!errorGoogle.value) {
        await router.push({name : 'Home'})
      }
    }

    const handleSignup = async () => {
      firstLetter.value = username.value.charAt(0).toUpperCase()
      const res = await signup(email.value, password.value, username.value)
      if (!errorSignup.value) {
        isSignup.value = true
      }
    }

    const handleError = () => {
      errorGoogle.value = null
      errorSignup.value = null
    }

    // Uploading profile picture
    const profilePicture = ref(null)
    const types = ['image/png', 'image/jpeg', 'image/jpg']
    const fileError = ref(null)
    const {error : errorAddProfile,url, isPending: uploadImagePending, uploadImage} = useStorage('profiles')
    const {user} = getUser()

    const getProfile = (e) => {
      const selected = e.target.files[0]
      if (selected && types.includes(selected.type)) {
        profilePicture.value = selected
        fileError.value = null
      } else {
        fileError.value = "Please select image file (png or jpeg)"
        profilePicture.value = null
      }
    }

    const handleProfile = async () => {
      if (profilePicture.value) {
        await uploadImage(profilePicture.value)
        if (!errorAddProfile.value) {
          await user.value.updateProfile({photoURL : url.value})
          location.reload()
          await router.push({name : "Home"})
        }
      }
    }

    // Skip Profile Picture
    const handleSkip = async () => {
      location.reload()
      await router.push({name: "Home"})
    }

      return { firstLetter, handleProfile, getProfile, fileError, errorAddProfile,  profilePicture, uploadImagePending, handleSkip, isSignup, username, email, password, errorSignup, handleSignup, isPending, errorGoogle, loginGoogle, handleError }
    }
}
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.emailLogin {
  background : var(--primary);
  color: var(--secondary);
}

.googleLogin {
  display: flex;
  justify-content: center;
  align-items: center;
}

.google-icon {
  margin: 0 8px;
  width: 17px;
  height: 17px;
}

/*Profile Picture Form */

.profile-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}


input[type=file] {
  margin: 5px 0;
}

.profile-btn {
  transition: all 0.2s;
  width: 100px;
  margin: auto 0;
}

.profile-btn:hover {
  background : var(--primary);
  color: var(--secondary);
}

.profile-btn-load {
  width: 100px;
  margin: 0;
}

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0
}

.no-profile {
  height: 200px;
  width: 200px;
  background: #ffb932;
  border-radius: 100%;
  font-size: 60px;
  padding-top: 10px;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skip-btn-container {
  display: flex;
  justify-content: end;
}

.skip-btn {
  font-size: 13px;
  color: var(--primary);
  text-decoration: underline;
  cursor: pointer;
}


</style>