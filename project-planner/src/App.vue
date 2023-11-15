<template>
  <NavComponent></NavComponent>
  <router-view/>
</template>

<script>
import NavComponent from "@/components/NavComponent";
export default  {
  name: "App",
  components: {NavComponent},

}
</script>

<style>
body {
  background: #f2f2f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  color: #555;
}
</style>
