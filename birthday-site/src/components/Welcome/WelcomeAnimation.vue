<template>
  <div class="section">
    <h1>
      <span data-char="W">W</span>
      <span data-char=".">E</span>
      <span data-char="L">L</span>
      <span data-char=".">C</span>
      <span data-char="O">O</span>
      <span data-char=".">M</span>
      <span data-char="E">E</span>
    </h1>
  </div>
</template>

<script>
import gsap from "gsap";
import {onMounted} from "vue";
export default {
  name: "WelcomeAnimation",
  setup() {
    let t1 = gsap.timeline()
    onMounted(() => {
      let text = document.querySelector("h1")
      let char = document.querySelectorAll("span")
      let replaceChar = document.querySelectorAll("span:not([data-char='.'])")

      t1.set(char, {yPercent: -110})
      t1.set(text, {autoAlpha: 1})
      t1
          .to(char,{duration:1,yPercent:0,stagger: 0.05,ease:"expo.inOut"})
          .to(replaceChar, {duration:1, yPercent: 100, ease: "expo.inOut", repeat: -1, yoyo: true, stagger: 0.1, repeatDelay: 1})
    })
  }
}
</script>

<style scoped>
.section{
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  color: transparent;
  font-size:  4.5em;
  line-height: 0.8;
  letter-spacing: 0.1em;
  -webkit-text-stroke: 3px #7dcae7;
  display: flex;
  overflow: hidden;
  margin: 10px 0;
}

h1 span {
  display: block;
  position: relative;
}

h1 span:before {
  content: attr(data-char);
  position: absolute;
  left: 0;
  top: 0;
  color: #7dcae7;
  transform: translateY(-60px);
}

</style>