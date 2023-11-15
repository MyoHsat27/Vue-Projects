<template>
  <div class="home">
    <transition name="toast">
      <ToastComponent v-if="showToast"></ToastComponent>
    </transition>
    <TodoComponent @badValue="triggerToast"></TodoComponent>
  </div>
</template>

<script>
import { ref } from 'vue'
import TodoComponent from "@/components/TodoComponent";
import ToastComponent from "@/components/ToastComponent"

export default {
  components: { TodoComponent, ToastComponent },
  setup() {
    const showToast = ref(false)

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => showToast.value = false, 3000)
    }

    return { showToast, triggerToast }
  }
}
</script>

<style>
.toast-enter-active{
  animation: wobble 0.5s ease;
}
.toast-leave-active {
  transition: all 0.5s ease;
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px) scale(0.6);
}

@keyframes wobble {
    0% {
      transform: translateY(-60px) scale(0.8);
      opacity: 0;
    }
    50% {
      transform: translateY(0px) scale(1);
      opacity: 1;
    }
  60% {
    transform : translateX(8px);
  }
  70% {
    transform : translateX(-8px);
  }
  80% {
    transform : translateX(4px);
  }
  90% {
    transform : translateX(-4px);
  }
  100% {
    transform : translateX(0);
  }

}
</style>