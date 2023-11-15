<template>
  <div class="container">
    <div class="my-5 row justify-content-center">
      <div class="col-11 col-sm-10 col-md-8 col-lg-6 p-0">

        <div class="row my-3">
          <div class="d-flex justify-content-between align-items-center">
            <input type="text" class="form-control" @keyup.enter="createTask" v-model="newTask">
            <button class="btn btn-primary ms-3" @click.prevent="createTask">
              Add
            </button>
          </div>
        </div>

        <div class="row my-3">
          <div class="d-flex justify-content-between align-items-center">
            <h5>Job List{{taskList.length > 1 ? "s" : ""}}</h5>
            <div :class="['badge rounded-pill bg-success px-2 animate__animated animate__tada']" v-if="finishTasks === taskList.length && taskList.length > 0">All Done</div>
            <div :class="['badge rounded-pill bg-danger px-2 animate__animated ', {animate__headShake : taskList.length !== 0}]" v-else>Done {{finishTasks}}</div>
          </div>
        </div>

        <div class="row my-3">
          <div class="card p-3">

              <div :class="['d-flex justify-content-between align-items-center my-2 animate__animated created ', taskObj.isDelete ? 'animate__fadeOutUp' : 'animate__fadeInDown']" v-for="taskObj in sortTaskList" :key="taskObj.id">
                <div class="align-items-center d-flex w-100" @dblclick="taskObj.isEdit = true">
                  <input type="checkbox" :id="'taskCheck' + taskObj.id" v-model="taskObj.isFinish">
                  <input type="text" v-model="taskObj.task" class="form-control mx-2" v-if="taskObj.isEdit" @keyup.enter="taskObj.isEdit = false">
                  <label :for="'taskCheck' + taskObj.id" :class="['mx-2', {done : taskObj.isFinish }, {'d-none' : taskObj.isEdit}]" >{{taskObj.task}}</label>
                </div>
                <button :class="['btn btn-outline-danger btn-sm']" @click="taskObj.isDelete = true; removeTask(taskObj)">Delete</button>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  data() {
    return {
      newTask : "",
      currentId: 0,
      taskList: [

      ],
    };
  },
  methods: {
    createTask () {
      if (this.newTask !== "") {
        this.currentId++
        this.taskList.push({
          id: this.currentId,
          task: this.newTask,
          isFinish: false,
          isEdit: false,
          isDelete: false
        })
        this.newTask = ""
      }
    },
    removeTask(taskObj) {
      setTimeout(() => {
        this.taskList = this.taskList.filter((el) => {
          return el.id !== taskObj.id
        })
      },600)
    },
  },
  computed: {
    finishTasks () {
      return this.taskList.filter((el) => {
        return el.isFinish === true
      }).length
    },
    sortTaskList() {
      let finishTask = this.taskList.filter((el) => {
        return el.isFinish === true
      })
      let unFinishTask = this.taskList.filter(((el) => {
        return el.isFinish === false
      }))
      return [...unFinishTask, ...finishTask]
    }
  }
};

</script>

<style>
.done {
  text-decoration: line-through;
}

.editShow{
  display: block !important;
}

.created{
  --animate-duration: 0.5s;
}
</style>
