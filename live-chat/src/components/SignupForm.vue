<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="Display Name" v-model="displayName">
    <input type="email" required placeholder="Email" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <div class="error">{{error}}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import {ref} from "vue";
import useSignup from "@/composable/useSignup";
export default {
  name: "SignupForm",
  setup(props, context) {
    const {error, signup} = useSignup()

    let displayName = ref('');
    let email = ref('');
    let password = ref('');

    const handleSubmit = async () => {
      await signup(displayName.value, email.value, password.value)
      if (!error.value) {
        context.emit('signup')
      }
    }

    return {
      displayName, email, password, handleSubmit, error
    }
  }
}
</script>

<style scoped>

</style>