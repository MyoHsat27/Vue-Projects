<template>
  <div class="project" :class="{complete : project.complete}">
    <div class="actions">
      <h3 @click="showDetail = !showDetail">{{project.title}}</h3>
      <div class="icons">
        <router-link :to="{name : 'editProject', params: {id: project.id}}">
          <span class="material-icons" >edit</span>
        </router-link>
        <span class="material-icons" @click="delProject">delete</span>
        <span class="material-icons tick" @click="toggleComplete">done</span>
      </div>
    </div>
    <div v-if="showDetail" class="detail">
      <p>{{project.details}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProject",
  props: ["project"],
  data() {
    return {
      showDetail: false,
      url: "http://localhost:3000/projects/" + this.project.id
    }
  },
  methods: {
    delProject() {
      fetch(this.url, {method: 'DELETE'})
          .then(() => {
            this.$emit("delete", this.project.id)
          })
          .catch(err => console.log(err))

    },
    toggleComplete () {
      fetch(this.url, {
        method: "PATCH",
        headers: {'Content-Type' : "application/json"},
        body: JSON.stringify({complete: !this.project.complete})
      })
          .then(() => {
            this.$emit("complete", this.project.id)
          })
          .catch(err => console.log(err.message))

    }

  }
}
</script>

<style scoped>
.project {
  max-width: 600px;
  margin: 20px auto;
  background : white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
  border-left :4px solid #e90074;
}

.project.complete {
  border-left-color: #08a16e;
}

.project.complete .tick {
  color: #08a16e;
}

h3 {
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #9d9d9d;
  cursor: pointer;
  transition: all 0.1s ease;
}

.material-icons:hover {
  color: #676767
}

</style>