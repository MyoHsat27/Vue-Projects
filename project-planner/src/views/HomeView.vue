<template>
  <FilterNav @filter="current = $event" :current="current"></FilterNav>
  <div class="home">
    <div v-if="projects.length" >
      <div v-for="project in filterProject" :key="project.id">
        <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"></SingleProject>
      </div>
    </div>
    <div v-else class="noProject">
      There is no project currently
    </div>
  </div>
</template>

<script>
import SingleProject from "@/components/SingleProject";
import FilterNav from "@/components/FilterNav";
export default {
  name: 'HomeView',
  components: {SingleProject, FilterNav},

  data() {
    return {
      projects: [],
      current : "all"
    }
  },
  methods: {
    deleteProject(id) {
      this.projects = this.projects.filter(project => project.id !== id)
    },
    completeProject(id) {
      let p = this.projects.find(project => project.id === id)
      p.complete = !p.complete
    },
  },
  computed: {
    filterProject () {
      if (this.current === "completed") {
        return this.projects.filter(project => project.complete)
      }
      if (this.current === "ongoing") {
        return this.projects.filter(project => !project.complete)
      }
      return this.projects

    }
  },
  mounted() {
    fetch("http://localhost:3000/projects")
        .then(respond => respond.json())
        .then(data => this.projects = data)
        .catch(err => console.log(err.message))
  },
}
</script>

<style scoped>
.noProject  {
  max-width: 600px;
  margin: 20px auto;
  background : white;
  padding: 40px 20px;
  border-radius: 4px;
  text-align: center;
  color: #757575;
  text-transform: uppercase;
  font-size:14px;
  font-weight: bold;
}
</style>