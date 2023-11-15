<template>
  <div class="container">
    <FillbdAnimation></FillbdAnimation>
    <div class="input-container">
      <input type="number" ref="inputRef" v-model="loginPw">
      <transition @enter="onEnter" @leave="onLeave">
        <img v-if="isShow" class="pooh-gif" src="../assets/data/cute_11.gif" @click="handleClick">
      </transition>
      <transition @enter="onEnter" @leave="onLeave"><div v-if="isShow" class="click-text">Don't Touch My Butt!!!</div></transition>
    </div>
  </div>
</template>

<script>
import {ref, watch, onMounted} from "vue";
import gsap from "gsap"
import {useRouter} from 'vue-router'
import FillbdAnimation from "@/components/FillbdAnimation";
export default {
  name: "LoginView",
  components: {FillbdAnimation},
  setup() {
    const loginPw = ref("")
    const inputRef = ref(null)
    const router = useRouter()
    const isShow = ref(false)

    onMounted(() => {
      inputRef.value.focus()
    })

    watch(loginPw, (newValue, oldValue) => {
      if (parseInt(newValue) === 2412005) {
        isShow.value = true
      } else if (parseInt(oldValue) === 2412005 && parseInt(newValue) === 241200) {
        isShow.value = false
      }
    })

    const onEnter = (el, done) => {
      gsap.fromTo(el, {scale: 0.1}, {scale: 1, ease: "back.out(3)", onComplete: done})
    }

    const onLeave = (el, done) => {
      gsap.fromTo(el, {scale: 1},{scale: 0, opacity: 0.5, onComplete: done})
    }

    const handleClick = () => {
        router.push("/warning")
    }

    return {loginPw, inputRef, isShow, onEnter, onLeave, handleClick}
  }
}
</script>

<style scoped>
.container {
  background: var(--white);
  padding: 20px 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input  {
  padding: 10px;
  margin: 20px;
  max-width: 280px;
  font-size: 40px;
  text-align: center;
  box-shadow: inset 0px 0px 5px 3px rgba(90, 88, 207, 0.3);
  border-radius: 5px;
  border: none;
  color: var(--black);
  caret-color: var(--black);
  caret-shape: underscore;
}
input:focus-visible {
  outline: none;
}

button  {
  margin: 0 10px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.pooh-gif {
  width: 120px;
  margin: 30px 0;
  cursor: pointer;
  user-select: none;
}

.click-text {
  font-size: 22px;
  font-weight: 500;
  color: var(--black)
}

</style>