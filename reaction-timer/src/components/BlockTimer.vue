<template>
  <div v-if="showBlock" class="block" @click="stopTimer">Click Me</div>
  <div v-else class="exo-block block">Block will be here</div>
</template>

<script>
export default {
  name: "BlockTimer",
  props : ["delay"],
  data() {
    return {
      showBlock : false,
      timer: null,
      reactionTime : 0
    }
  },
  methods: {
    startTimer(){
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)

    },
    stopTimer() {
      clearInterval(this.timer)
      this.$emit("sendDelay", this.reactionTime)
    }
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true
      this.startTimer()
    }, this.delay)
  },
}
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}

.exo-block {
  background-color: white;
  border: 1px solid #0faf87;
  color: #0faf87
}
</style>