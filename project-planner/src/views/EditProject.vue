<template>
  <div class="container">
    <form @submit.prevent="editProject">
      <div>
        <label for="title">Title :</label>
        <input type="text" id="title" v-model="title" required>
      </div>
      <div>
        <label for="details">Details :</label>
        <textarea id="details" v-model="details" required></textarea>
      </div>
      <button>Update Project</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditProject.vue",
  props : ["id"],
  data () {
    return {
      title: "",
      details: "",
      url : "http://localhost:3000/projects/" + this.id
    }
  },
  methods : {
    editProject () {
      let project = {
        title: this.title,
        details: this.details,
        complete: false
      }

      fetch(this.url, {
        method : "PATCH",
        headers : {'Content-Type' : "application/json"},
        body: JSON.stringify(project)
      })
          .then(() => {
            this.$router.push({name: "home"})
          })
          .catch((err) => console.log(err.message))
    }
  },

  mounted() {
    fetch(this.url)
        .then((respond) => respond.json())
        .then(data => {
          this.title = data.title
          this.details = data.details
        })
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 50px 0
}

form {
  width: 600px;
  background: white;
  padding: 20px;
  border-radius: 10px;
}

label{
  display: block;
  color: #757575;
  text-transform: uppercase;
  font-size:14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0
}

input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}

input:focus-visible {
  outline: none;
}

textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}

textarea:focus-visible {
  outline: none;
}

form button {
  display: block;
  margin: 20px auto 0;
  background-color: #08a16e;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.1s ease;
}

form button:hover {
  background-color: #10946a;
}

</style>