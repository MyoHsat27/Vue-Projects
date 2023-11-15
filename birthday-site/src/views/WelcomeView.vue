<template>
  <div class="intro">
    <WelcomeIntro></WelcomeIntro>
    <StoryVue></StoryVue>
  </div>
</template>

<script>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {onMounted} from "vue";
import WelcomeIntro from "@/components/Welcome/WelcomeIntro";
import StoryVue from "@/components/Welcome/StoryVue";
export default {
  name: "WelcomeView",
  components: {WelcomeIntro, StoryVue},
  setup() {
    gsap.registerPlugin(ScrollTrigger)
    onMounted(() => {
      gsap.to(".circle-big", {
        y: -300,
        scrollTrigger: {
          start: "top top",
          end: "bottom top",
          toggleActions: "restart",
          scrub: 1,
          trigger: ".container",
        }
      })
      gsap.to(".circle-middle", {
        y: -500,
        scrollTrigger: {
          start: "top top",
          end: "bottom top",
          toggleActions: "restart",
          scrub: 1.5,
          trigger: ".container",
        }
      })
      gsap.to(".circle-small", {
        y: -700,
        scrollTrigger: {
          start: "top top",
          end: "bottom top",
          toggleActions: "restart",
          scrub: 2,
          trigger: ".container",
        }
      })
      gsap.utils.toArray(".main-section").forEach((container, i) => {
        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          pin: true,
          pinSpacing: false,
        })
      })
    })
  }
}
</script>

<style scoped>
.intro {
  position: relative;
}
</style>
