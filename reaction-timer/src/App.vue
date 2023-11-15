<template>
  <div class="container">
    <h2>Reaction Timer</h2>
    <button class="btn btn-outline-primary my-4" @click="start" :disabled="isPlaying">Play</button>
    <ResultTimer v-if="score" :score="score"></ResultTimer>
  </div>
  <BlockTimer v-if="isPlaying" :delay="delay" @sendDelay="takeDelay"></BlockTimer>
</template>

<script>
import BlockTimer from "@/components/BlockTimer";
import ResultTimer from "@/components/ResultTimer";
export default {
  name: "App",
  components: {BlockTimer, ResultTimer},
  data() {
    return {
      isPlaying: false,
      delay : null,
      score : null
    }
  },
  methods: {
    start() {
      // Remove last played result
      this.score = null

      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      console.log(this.delay)
    },
    takeDelay(result) {
      this.score = result

      // Enable play button for new game
      this.isPlaying = false
    }
  }
};

</script>

<style>
#app {
  font-family: Avenir,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}

.container {
  margin: 50px 0
}
</style>
