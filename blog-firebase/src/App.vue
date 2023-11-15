<template>
  <NavbarComponent></NavbarComponent>
  <router-view/>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
export default {
  name: "App",
  components: {NavbarComponent},
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
