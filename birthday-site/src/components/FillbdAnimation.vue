<template>
  <div class="word-container">
      <div class="slide-bar" id="slideBar" >
          <div class="bar" id="bar"></div>
      </div>
      <div class="text-block" id="text-one">
        <h1>Enter</h1>
      </div>
      <div class="text-block" id="text-two">
        <h1>Birthday</h1>
      </div>
  </div>
</template>

<script>
import gsap from "gsap"
import {onMounted} from "vue";

export default {
  name: "FillbdAnimation",
  setup() {
    const maskTL = gsap.timeline()
    const slideTL = gsap.timeline()
    const mainTL = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        gsap.set("#text-two", {opacity: 0});
        gsap.set("#bar", {scaleY: 0.1});
        gsap.set("#text-one h1", {opacity: 1})
      }
    })
    onMounted(() => {
      gsap.set('#text-two', {opacity: 0})
      gsap.set('#bar', {scaleY: 0.1})
      mainTL
          .add(slideTL)
          .add(maskTL, 1)
      slideTL
          .to("#bar", 1,{y: 115,scaleY:1, ease: "back.Out"})
          .to('#slideBar', 1.5,{x: 425, ease: "back.inOut(0.8)"}, ">0.5")
          .to('#slideBar', 1.5,{x: 0, ease: "back.inOut(0.8)"}, ">0.5")
          .to('#slideBar', 1.5,{x: 425, ease: "back.inOut(0.8)"}, ">0.5")
          .to("#bar", 1,{y: 280,scaleY:0.1, ease: "back.Out"})

      maskTL
          .to("#text-one", 1.5,{
            ease: "back.inOut(0.8)",
            'clip-path' : 'polygon(0 0, 88% 0, 79% 100%, 0% 100%)',
            onComplete: () => {
              gsap.set('#text-two', {opacity: 1})
            }},">0.5" )
          .to("#text-one", 1.5,{
            ease: "back.inOut(0.8)",
            'clip-path' : 'polygon(0 0, 18% 0, 9% 100%, 0 100%)',
            onComplete: () => {
              gsap.set('#text-one h1', {opacity: 0})
            }},">0.55")
          .to("#text-one", 1.5,{
            ease: "back.inOut(0.8)",
            'clip-path' : 'polygon(0 0, 88% 0, 79% 100%, 0% 100%)'},">0.41",)
    })
  }
}
</script>

<style scoped>
.word-container{
  width: 800px;
  height: 300px;
  position: relative;
  overflow: hidden;
}

.slide-bar{
  width: 9px;
  border-radius: 3px;
  height: 400px;
  position: absolute;
  top:57%;
  left: 180px;
  z-index: 10;
  transform: translateY(-50%) rotateZ(6deg);
}

.bar {
  width: 100%;
  height: 130px;
  border-radius: 3px;
  background: var(--black);
}

.text-block{
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background : var(--white)
}

.text-block h1 {
  font-family: var(--beauty-fill);
  letter-spacing: 5px;
  font-size: 4rem;
  position: relative;
  perspective: 500px;
  transform-style: preserve-3d;
  color: var(--black)
}

.text-block h1::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 60px;
  left: 0;
  background: radial-gradient(var(--black), transparent 70%);
  transform: translateY(100px) rotateX(-60deg);
  opacity: 0.3;
}

#text-one {
  z-index: 6;
  clip-path: polygon(0 0, 18% 0, 9% 100%, 0 100%)
}

#text-two {
  z-index: 4;
  clip-path: polygon(0 0, 88% 0, 79% 100%, 0% 100%)
}


</style>