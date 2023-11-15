<template>
  <nav>
    <router-link :to="{name : 'home'}">Projects</router-link>
    <router-link :to="{name : 'addProject'}">Add Project</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: center;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  color: #757575;
  font-size:14px;
  font-weight: bold;
  margin: 30px 10px
}

a.router-link-active {
  border-bottom: 2px solid #1e9870;
  padding-bottom: 5px;
}


</style>