<template>
  <div class="d-flex justify-content-between align-items-center">
    <h5>{{title}}</h5>
    <button class="btn btn-outline-primary btn-sm" @click="$emit('add')">Add</button>
  </div>
</template>

<script>
export default {
  name: "TodoHead.vue",
  emits: ['add'],
  props: {
    title: String
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>