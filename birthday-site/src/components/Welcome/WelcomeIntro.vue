<template>
  <div class="container main-section">
    <div class="cover-container">
      <div class="cover"></div>
      <div class="cover"></div>
      <div class="cover"></div>
      <div class="cover"></div>
      <div class="cover"></div>
    </div>
    <img class="purple-star-balloon spark balloon" src="@/assets/data/purple-star.png" alt="">
    <img class="pink-star-balloon spark balloon" src="@/assets/data/pink-star.png" alt="">
    <img class="heart-1 spark balloon" src="@/assets/data/heart-1.png" alt="">
    <img class="heart-2 spark balloon" src="@/assets/data/heart-1.png" alt="">
    <img class="normal-star spark spark-circle" src="@/assets/data/normal-star.png" alt="">
    <img class="pink-circle-1 circle-middle spark spark-circle" src="@/assets/data/pink-circle-1.png" alt="">
    <img class="pink-circle-2 circle-middle spark spark-circle" src="@/assets/data/pink-circle-1.png" alt="">
    <img class="up-wave " src="@/assets/data/up-wave.png" alt="">
    <div class="circle circle-big circle-1"></div>
    <div class="circle circle-big circle-2"></div>
    <div class="circle circle-big circle-3"></div>
    <div class="circle circle-middle circle-4"></div>
    <div class="circle circle-middle circle-5"></div>
    <div class="circle circle-middle circle-6"></div>
    <div class="circle circle-small circle-7"></div>
    <div class="circle circle-small circle-8"></div>
    <div class="circle circle-small circle-9"></div>
    <WelcomeAnimation></WelcomeAnimation>
  </div>

</template>

<script>
import gsap from "gsap";
import {onMounted} from "vue";
import WelcomeAnimation from "@/components/Welcome/WelcomeAnimation";
export default {
  name: "WelcomeIntro",
  components: {WelcomeAnimation},
  setup() {
    const t1 = gsap.timeline()
    onMounted(() => {
      t1
          .to(".cover", {yPercent: -100, ease: "power1.out", stagger: 0.2, onComplete : () => { document.querySelector(".cover-container").style.display = "none" }})
          .fromTo([".circle", ".spark-circle"], {opacity: 0, scale: 0}, {duration: 0.5, opacity: 1, scale: 1})
          .fromTo(".balloon", {yPercent: -100},  {yPercent: 0,ease: "bounce.out", duration: 1.3})

    })
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  background: #e1f6ff;
  position: relative;
  height: 100vh;
  overflow: hidden;
  z-index: 50;
}
.cover-container {
  display: grid;
  position: absolute;
  width: 100%;
  grid-template-columns: auto auto auto auto auto;
  height: 100vh;
  z-index: 1000;
}

.cover {
  background: #05161f;
  z-index: 110;
}

.up-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
}

.spark {
  user-select: none;
  position: absolute;
  z-index: 10;
}

.purple-star-balloon {
  width: 230px;
  top: -100px;
  right: 3%;
}

.pink-star-balloon {
  width: 170px;
  top: -180px;
  left: 15%;
}

.normal-star {
  width: 100px;
  bottom: 150px;
  left: 25%;
}

.heart-1 {
  position: absolute;
  width: 120px;
  left: 5%;
  top: -570px;
}

.heart-2 {
  position: absolute;
  width: 80px;
  right: 23%;
  top: -500px;
}

/* Spark (Circle) */
.circle {
  border-radius: 50%;
  position: absolute;
}

.circle-1 {
  background: #9EDFF9;
  top: -60px;
  left: 30%;
  width: 120px;
  height: 120px;
}
.circle-2 {
  background: #9EDFF9;
  bottom: -60px;
  left: 8%;
  width: 140px;
  height: 140px;
}
.circle-3 {
  background: #9EDFF9;
  top: 100px;
  right: -100px;
  width: 140px;
  height: 140px;
}
.circle-4 {
  background: rgba(255, 255, 255, 0.76);
  top: 200px;
  left: -20px;
  width: 60px;
  height:60px;
}
.circle-5 {
  background: rgba(255, 255, 255, 0.59);
  bottom: 120px;
  left: 9%;
  width: 45px;
  height:45px;
}
.circle-6 {
  background: rgba(255, 255, 255, 0.59);
  bottom: 120px;
  right: -30px;
  width: 65px;
  height: 65px;
}
.circle-7 {
  background: #ffb03f;
  width: 16px;
  height: 16px;
  bottom: 260px;
  left: 20%;
}
.circle-8 {
  background: #ffb03f;
  width: 16px;
  height: 16px;
  bottom: 70px;
  left: 50%;
}
.circle-9 {
  background: #ffb03f;
  width: 16px;
  height: 16px;
  top: 150px;
  right: 35%;
}
.pink-circle-1 {
  position: absolute;
  width: 120px;
  height: 120px;
  bottom: -60px;
  right: 12%;
}
.pink-circle-2 {
  position: absolute;
  width: 60px;
  height: 60px;
  bottom: 150px;
  left: -35px;
  transform: rotateZ(100deg);
}

</style>