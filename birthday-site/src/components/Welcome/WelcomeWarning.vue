<template>
  <span v-for="(dot,index) in dots" :key="index" class="dot"> {{ dot }} &nbsp;  </span>
</template>

<script>
import gsap from "gsap";
import {onMounted} from "vue";

export default {
  name: "WelcomeWarning",
  props: ["dots"],
  emits: ["finish"],
  setup(props, {emit}) {
    const t1 = gsap.timeline()

    onMounted(() => {
      t1.fromTo(
          ".dot",
          {opacity:0, y: 60},
          {
            duration: 0.6,
            opacity: 1,
            y: 0,
            ease: "back.out(3)",
            stagger: 0.1,
            onComplete: () => {
              setTimeout(() => {t1.reverse()}, 1500)
            },
            onReverseComplete: () => {
              setTimeout(() => {emit("finish")}, 500)
            }
          })
    })
  }
}
</script>

<style scoped>
span{
  color: #cdfaff;
  font-weight: 400;
  font-size: 35px;
  display: inline-block;
}
</style>