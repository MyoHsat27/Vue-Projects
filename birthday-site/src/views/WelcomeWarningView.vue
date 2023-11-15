<template>
  <div class="container">
    <div class="warning-container">
      <div class="warning-heading">
        <WelcomeWarning v-if="!firstFinish" :dots="firstWarning" @finish="onFinish"></WelcomeWarning>
        <WelcomeWarning v-if="firstFinish && !secondFinish" :dots="secondWarning" @finish="onSecFinish"></WelcomeWarning>
        <WelcomeWarning v-if="firstFinish && secondFinish" :dots="thirdWarning" @finish="onThirdFinish"></WelcomeWarning>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import WelcomeWarning from "@/components/Welcome/WelcomeWarning";
import {useRouter} from "vue-router";

export default {
  name: "WelcomeView",
  components: { WelcomeWarning },
  setup() {
    const firstWarning = ref(["Hey", "I", "told", "you", "not", "to", "touch", "my", "butt", "!", "!", "!"])
    const secondWarning = ref(["Now","I", "can't", 'marry', "anymore", ".", ".", ".", "😞"])
    const thirdWarning = ref(["You", "have", "to", "take", "responsibility", "for", "this", "🥺"])
    const firstFinish = ref(false)
    const secondFinish = ref(false)
    const router = useRouter()

    const onFinish = () => {
      firstFinish.value = true
    }

    const onSecFinish = () => {
      secondFinish.value = true
    }

    const onThirdFinish = () => {
      router.push("/welcome")
    }

    return {firstWarning, secondWarning, thirdWarning, onFinish, onSecFinish, onThirdFinish, firstFinish, secondFinish}
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
}
.warning-container {
  background: #05161f;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 15;
}

.warning-heading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>