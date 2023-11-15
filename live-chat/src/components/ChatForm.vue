<template>
  <form @keydown.enter.prevent="handleSubmit">
    <textarea placeholder="Type a message and hit enter to send..." v-model="message"></textarea>
    <div v-if="error">{{error}}</div>
  </form>
</template>

<script>
import {ref} from "vue";
import getUser from "@/composable/getUser";
import {timeStamp} from "@/firebase/config";
import useCollection from "@/composable/useCollection";
export default {
  name: "ChatForm.vue",
  setup() {
    const {user} = getUser()
    const message = ref("")
    const {error, addDoc} = useCollection("message")

    const handleSubmit = async () => {
      const chat = {
        name : user.value.displayName,
        message : message.value,
        createdAt : timeStamp()
      }
      await addDoc(chat)
      if (!error.value) {
        message.value = ""
      }
    }

    return {message, handleSubmit, error}
  }
}
</script>

<style scoped>
form{
    margin: 10px;
}

textarea{
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}

</style>