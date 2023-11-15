<template>
  <div class="container">

    <div class="py-5">
        <label class="form-label" for="categoryTitle">Category Title</label>
      <div class="d-flex justify-content-center align-items-center">
        <input class="form-control" id="categoryTitle" placeholder="Title" @keyup.enter="addCategory" type="text" v-model="categoryTitle">
        <button class="btn btn-outline-primary ms-5" @click="addCategory">Add</button>
      </div>
    </div>

    <div class="row">
        <TodoComponent v-for="(title,index) in todoCategories" :key="index" :title="title"></TodoComponent>
    </div>

  </div>
</template>

<script>
import TodoComponent from "@/components/TodoComponent";

export default {
  name: "App",
  components: {
    TodoComponent,
  },
  data() {
    return {
      todoCategories: [],
      categoryTitle: ""
    };
  },
  methods: {
    addCategory () {
      this.todoCategories.push(this.categoryTitle)
      this.categoryTitle = ""
    },
  },
};

</script>

<style>
</style>

