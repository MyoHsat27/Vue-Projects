<template>

  <div class="container">
    <NavComponent></NavComponent>
    <ChatWindow></ChatWindow>
    <ChatForm></ChatForm>
  </div>

</template>

<script>
import NavComponent from "@/components/NavComponent";
import ChatForm from "@/components/ChatForm";
import ChatWindow from "@/components/ChatWindow";
import {useRouter} from "vue-router";
import getUser from "@/composable/getUser";
import {watch} from "vue";
export default {
  name: "ChatroomView",
  components: {NavComponent, ChatForm, ChatWindow},
  setup() {
    const {user} = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({name: "Welcome"})
      }
    })
  }
}
</script>

<style scoped>
</style>