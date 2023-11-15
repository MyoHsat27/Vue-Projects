<template>
  <div class="col-12 col-md-6 col-lg-6 col-xl-4 py-3 animate__animated animate__zoomIn">
    <TodoHead :title="title" @add="add()"></TodoHead>
    <TodoStatus :finish-task="finishTask" :listLength="listArray.length"></TodoStatus>
    <ul class="list-group">
      <template v-if="listArray.length > 0">
        <TodoList ref="todoList" v-for="(list) in listArray" :key="list.id" :list="list"  @checkFinish="checkTask" @delList="deleteList" @changeText="changeText"></TodoList>
      </template>
      <li class="list-group-item justify-content-center align-items-center d-flex animate__animated animate__fadeIn" v-else>No Task</li>
    </ul>
  </div>
</template>

<script>
import TodoHead from "@/components/TodoHead";
import TodoStatus from "@/components/TodoStatus";
import TodoList from "@/components/TodoList";

export default {
  name: "TodoComponent.vue",
  components: {TodoList,TodoStatus,TodoHead},
  props: ["title"],
  data() {
    return {
      listArray : [{
        text : "",
        isFinish: false,
        id: this.currentId
      }],
      finishTask : 0,
      currentId: 0
    }
  },
  methods: {
    add() {
      this.currentId += 1
      this.listArray.push({
        text: "",
        isFinish : false,
        id: this.currentId
      })
      },
    deleteList(x) {
      this.listArray = this.listArray.filter((list) => {
        return list.id !== x
      })
      this.finishTask -= 1
    },
    changeText(index, newText) {
      this.listArray.map((list) => {
        if (list.id === index) {
          list.text = newText
        }
      })
    },
    checkTask(condition,index) {
      this.listArray.map((task) => {
        if (task.id === index) {
          task.isFinish = condition
        }
      })

      this.finishTask = this.listArray.filter(({isFinish}) => {
        return isFinish
      }).length
    }
  }
}

</script>

<style scoped>

</style>