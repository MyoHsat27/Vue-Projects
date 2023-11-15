<template>
  <div class="result">Result : {{score}} ms | Rank : {{rank}}</div>
</template>

<script>
export default {
  name: "ResultTimer",
  props: ['score'],
  data () {
    return {
      rank: null
    }
  },
  mounted() {
    if (this.score < 10) {
      this.rank = "God"
    } else if (this.score < 300) {
      this.rank = "Excellent"
    } else if (this.score < 500) {
      this.rank = "Good"
    } else if (this.score < 800) {
      this.rank = "Normal"
    } else if (this.score < 1000) {
      this.rank = "Bad"
    } else {
      this.rank = "Trash"
    }

  }
}
</script>

<style scoped>
.result {
  color: #118a6f;
  opacity: 1;
}
</style>