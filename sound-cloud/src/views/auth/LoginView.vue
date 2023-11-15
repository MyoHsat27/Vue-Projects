<template>
  <div class="form">
    <h3 class="title">Login</h3>
    <div>
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" @keyup="handleError" v-model="password" required>
      <div class="error" v-if="error || errorGoogle">{{error}} {{errorGoogle}}</div>
      <div class="btn-container">
        <button v-if="!isPending" class="emailLogin" @click="loginEmail">Login</button>
        <button v-if="isPending" disabled>Loading</button>
        <button class="googleLogin" @click="loginGoogle"><img src="../../assets/1534129544.svg" class="google-icon" alt=""> <span>Continue with Google</span></button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import useGoogleLogin from "@/mixins/useGoogleLogin";
import useLogin from "@/mixins/useLogin";
import {useRouter} from "vue-router";

export default {
  name: "LoginView",
  setup() {
    const {errorGoogle, googleLogin} = useGoogleLogin()
    const {error, login, isPending} = useLogin()
    const email = ref("")
    const password = ref("")
    const router = useRouter()

    const loginGoogle = async () => {
      const res = await googleLogin()
      if (!errorGoogle.value) {
        await router.push({name : "Home"})
      }
    }

    const loginEmail = async () => {
      const res = await login(email.value, password.value)
      if (!error.value) {
        await router.push({name : "Home"})
      }
    }

    const handleError = () => {
      errorGoogle.value = null
      error.value = null
    }

    return {email, password, errorGoogle, loginGoogle, error, loginEmail, isPending, handleError }
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
</style>