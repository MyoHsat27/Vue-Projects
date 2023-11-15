<template>
  <div class="welcome container">
    <div>Welcome</div>
    <div v-if="showLogin">
      <h3>Login</h3>
      <LoginForm @login="enterChat" ></LoginForm>
      <p>No account yet? <span @click="showLogin = false">Signup</span></p>
    </div>
    <div v-else>
      <h3>Sign Up</h3>
      <SignupForm @signup="enterChat"></SignupForm>
      <p>Already registered? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm";
import LoginForm from "@/components/LoginForm";
import {ref} from "vue";
import {useRouter} from 'vue-router'

export default {
  name: "WelcomeView",
  components : {SignupForm, LoginForm},
  setup() {
    let showLogin = ref(true)
    let router = useRouter()

    const enterChat = () => {
      router.push({name : "Chatroom"})
    }


    return {showLogin, enterChat}
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label{
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border : 1px solid #eee;
  outline : none;
  color: #999;
  margin: 10px auto
}

.welcome button {
  margin: 20px auto;
}

.welcome p {
  font-size: 14px;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  color: #2aa694
}
</style>