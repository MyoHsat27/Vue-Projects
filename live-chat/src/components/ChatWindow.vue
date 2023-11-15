<template>
  <div class="chat-window">
    <div v-if="error">{{error}}</div>
    <div v-if="formattedDocument" ref="messageBox"  class="messages">
      <div v-for="doc in formattedDocument" :key="doc"  class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{doc.name}}</span>
        <span class="message">{{doc.message}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "@/composable/getCollection";
import {computed, ref, onUpdated} from "vue";
import { formatDistanceToNow } from 'date-fns'

export default {
  name: "ChatWindow",
  setup() {
    const {documents, error} = getCollection("message")

    const formattedDocument = computed(() => {
      if (documents.value) {
        return documents.value.map(doc => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          return { ...doc, createdAt: time }
        })
      }
    })

    // Auto scroll to bottom when Starting and Adding
    const messageBox = ref(null)
    onUpdated(() => {
      messageBox.value.scrollTop = messageBox.value.scrollHeight
    })


    return {formattedDocument, error, messageBox}
  }
}
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>