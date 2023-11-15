<template>
  <div class="story story-1 main-section">
    <div class="story-image-cover"></div>
    <div class="card-container">
      <div class="left">
        <div class="image-cover"></div>
        <img src="../../assets/data/baby-girl.png" class="card-image">
      </div>
      <div class="right">
        <p>Long Long ago...</p>
        <p>There was a girl that was born</p>
        <p>on the same exact day as today</p>
        <p>at 2005.</p>
      </div>
    </div>
  </div>
  <div class="story story-2 main-section">
    <div class="story-image-cover"></div>
    <div class="card-container">
      <div class="left left-2">
        <div class="image-cover"></div>
        <div class="image-container-2"></div>
      </div>
      <div class="right">
        <p>She was neither beauty nor special</p>
        <p>in ANY particular aspect. However,</p>
        <p>She is very kind-hearted and</p>
        <p>always think about other.</p>
      </div>
    </div>
  </div>
  <div class="story story-3 main-section">
    <div class="story-image-cover"></div>
    <div class="card-container">
      <div class="left left-3">
        <div class="image-cover"></div>
        <div class="image-container-3"></div>
      </div>
      <div class="right">
        <p>Because of that,</p>
        <p>Even though she isn't any particular</p>
        <p>she is adored and always special</p>
        <p>in the heart of Everyone.</p>
      </div>
    </div>
  </div>
  <div class="story story-4 main-section">
    <div class="story-image-cover"></div>
    <div class="card-container">
      <div class="left left-4">
        <div class="image-cover"></div>
        <div class="image-container-4"></div>
      </div>
      <div class="right right-4">
        <p>and finally,</p>
        <p>today is her 18th birthday.</p>
        <p>Please enjoy it!</p>
      </div>
    </div>
  </div>
  <div class="congrats-section main-section">
    <div class="congrats-image-cover"></div>
    <img class="funny-img-02 funny-img" src="../../assets/data/congrat-02.gif" alt="">
    <img class="funny-img-03 funny-img" src="../../assets/data/congrat-08.gif" alt="">
    <div class="birthday-word-container">
      <div class="words-container">
        <img src="../../assets/data/congrat-03.gif" alt="">
        <div>Happy Birthday</div>
        <img src="../../assets/data/congrat-05.gif" alt="">
      </div>
      <div class="person-img">
        <img class="funny-img-01 funny-img" src="../../assets/data/congrat-01.gif" alt="">
      </div>
    </div>
    <div class="present-container">
      <img class="present-img" @click="toWish" src="../../assets/data/congrat-06.gif" alt="">
      <div class="present-word">Click Present Box!</div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {useRouter} from "vue-router";
export default {
  name: "StoryVue",
  setup() {
    gsap.registerPlugin(ScrollTrigger)
    onMounted(() => {
      gsap.utils.toArray(".card-container").forEach((container,i) => {
        gsap.fromTo(
            container.children[0].children[0],
            { y:0 },
            { yPercent: 103, scrollTrigger: {
              start: "top center",
                end: "bottom bottom",
                trigger: `.story-${1 + i}`,
                toggleActions: "restart",
                scrub: 2,
              }}
        )
        gsap.to(container.children[1].children,{
          backgroundPositionX: "0%",
          stagger: 1,
          scrollTrigger: {
            start: "top center",
            end: "bottom bottom",
            trigger: `.story-${1 + i}`,
            toggleActions: "restart",
            scrub: 1
          }
        })
      })
      gsap.fromTo(".funny-img-01", {x: 130, y: 250},{y:-250, duration: 8, repeat: -1, ease:"linear", repeatDelay: 3})
      gsap.fromTo(".funny-img",
          {
            scale: 0,
          },
          {
            scale: 1,
            scrollTrigger: {
              start: "top center",
              end: "bottom bottom",
              trigger: ".congrats-section",
              scrub: 1
            }
          })
      gsap.fromTo(".person-img",
          {
            rotationX: 100,
            opacity: 0
          },
          {
            rotationX: 0,
            opacity: 1,
            scrollTrigger: {
              start: "top center",
              end: "bottom bottom",
              trigger: ".congrats-section",
              scrub: 1
            }
          })
      gsap.fromTo(".words-container",
          {
            y: 150,
            scale: 0.5,
            opacity: 0,
          },
          {
            y:0,
            scale: 1,
            z:0,
            opacity: 1,
            scrollTrigger: {
              start: "top center",
              end: "bottom bottom",
              trigger: ".congrats-section",
              scrub: 1
            }
          })
      gsap.fromTo(".present-container",
          {
            y: 300,
          },
          {
            y:0,
            scrollTrigger: {
              start: "top center",
              end: "bottom bottom",
              trigger: ".congrats-section",
              scrub: 1
            }
          })
    })


    const router = useRouter()

    const toWish = () => {
      router.push("/happy-birthday")
    }

    return { toWish }
  }
}
</script>

<style scoped>
.story{
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat ;
  position: relative;
}

.story-image-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  background : rgba(252, 251, 251, 0.15);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.story-1 {
  background-image: url("../../assets/data/stich_wallpaper.jpg");
}

.story-2{
  background-image: url("../../assets/data/stich_wallpaper_02.jpeg");
}

.story-3 {
  background-image: url("../../assets/data/stich_wallpaper_04.jpg");
}

.story-4 {
  background-image: url("../../assets/data/stich_wallpaper_03.jpg");
}


.card-container {
  height:70%;
  width: 70%;
  display: flex;
  background : rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  z-index: 1001;
}

.left {
  width: 50%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-cover {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background : rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  z-index: 1001;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateY(-200px);
  top: 0;
  left: 0
}

.left-2 {
  padding: 30px
}

.image-container-2 {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/data/poe-baby.jpg");
  background-size: auto auto;
  background-position: top center;
  background-repeat: no-repeat;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: inset 0 0 6px 4px rgb(234, 194, 200);
  -moz-box-shadow: inset 0 0 6px 4px rgb(234, 194, 200);
  box-shadow: inset 0 0 6px 4px rgb(234, 194, 200);
}

.image-container-3 {
  border-radius: 20px;
  width: 90%;
  height: 90%;
  background-image: url("../../assets/data/poe-group-01.jpg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-box-shadow: inset 0 0 6px 4px #f9f1be;
  -moz-box-shadow: inset 0 0 6px 4px #f9f1be;
  box-shadow: inset 0 0 6px 4px #f9f1be;
}

.image-container-4 {
  width: 80%;
  height: 80%;
  background-image: url("../../assets/data/poe-adult-01.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
  overflow: hidden;
  -webkit-box-shadow: inset 0 0 6px 4px #d2e2fb;
  -moz-box-shadow: inset 0 0 6px 4px #d2e2fb;
  box-shadow: inset 0 0 6px 4px #d2e2fb;
}

.card-image {
  width: 60%;
}

.right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 50px 30px;
  text-align: start;
  font-size: 35px;
  font-family: var(--beauty-modern);
  font-weight: 400;
}

.right > p {
  background: linear-gradient(
  to right,
  rgb(37,37,37) 50%, rgba(255, 255, 255, 0) 50%
  );
  background-size: 200% 100%;
  background-position-x: 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.right-4 {
  position: relative;
}


.congrats-section {
  background-image: url("../../assets/data/birthday-bg-03.jpeg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.congrats-image-cover {
  background : rgba(255, 255, 255,0.3);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(25px);
  z-index: 1001;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0
}

.birthday-word-container {
  z-index: 1002;
  display: flex;
  align-items: center;
  flex-direction: column
}

.words-container {
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.words-container div {
  padding: 0 20px;
  font-family: var(--beauty-lovely);
  font-size: 60px;
  font-weight:500;
}

.words-container img {
  width: 100px;
}

.person-img {
  position: relative;
  background-image: url("../../assets/data/poe-01.jpg");
  background-size: cover;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  -webkit-box-shadow: inset 0 0 6px 4px #d2e2fb;
  -moz-box-shadow: inset 0 0 6px 4px #d2e2fb;
  box-shadow: inset 0 0 6px 4px #cbe9ed;
}

.funny-img {
  position: absolute;
  width: 100px;
  z-index: 1001;
}

.funny-img-03 {
  top: -15px;
  left: 10px
}

.funny-img-02 {
  top: 10px;
  right: 10px
}

.present-container {
  padding-bottom: 30px;
  z-index: 1002;
}

.present-img {
  width: 120px;
  cursor: pointer
}

.present-word {
  font-size: 22px;
  color: #6c5fd9;
}


</style>