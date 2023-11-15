<template>
  <li class="list-group-item d-flex justify-content-between align-items-center listTaskDuration animate__animated" :class="[isDelete ? 'animate__fadeOutUp' : 'animate__fadeInDown']">
    <input class="form-control" ref="textInput" type="text" v-model="text" v-if="isEdit" @keyup.enter="editText">
    <template v-else>
      <div class="d-flex justify-content-start align-items-center w-100"  @dblclick="isEdit = true">
        <input type="checkbox" :class="['form-check me-2']" v-model="isFinish" @click="finishing">
        <span :class="[{finishTask : isFinish}]">{{list.text}}</span>
      </div>
      </template>
    <button class="btn btn-outline-danger btn-sm ms-2" @click="deleteTask">Delete</button>
  </li>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      isEdit: true,
      text: "",
      isFinish: false,
      isDelete: false
    }
  },
  props: {
    list: Object,
},
  methods: {
    editText () {
      this.isEdit = false
      this.$emit('changeText', this.list.id, this.text)
    },
    finishing() {
      setTimeout(() => {
        this.$emit('checkFinish', this.isFinish, this.list.id)
      }, )
    },
    deleteTask() {
      this.isDelete = true
      setTimeout(() => {
        this.$emit('delList', this.list.id)
      },500)
    }
  }
}
</script>

<style >
.finishTask {
  text-decoration: line-through;
}

.listTaskDuration {
  --animate-duration: 800ms;
}
</style>