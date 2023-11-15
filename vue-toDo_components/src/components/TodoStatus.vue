<template>
  <div class="d-flex justify-content-between align-items-center pt-2 pb-3">
    <div>
      <span class="badge bg-danger rounded-0" v-if="finishTask !== listLength">{{listLength}}</span>
      <span class="badge bg-success rounded-0"  v-if="finishTask > 0 && listLength !== finishTask">{{finishTask}}</span>
    </div>

    <span class="badge bg-success rounded-pill" v-if="listLength === finishTask && listLength > 0">Done</span>
    <span class="badge bg-danger rounded-pill"  v-else>Done</span>
  </div>
</template>

<script>
export default {
  name: "TodoStatus.vue",
  data() {
    return {
    }
  },
  props: ["listLength",'finishTask'],
  computed: {
  }
}
</script>

<style scoped>

</style>