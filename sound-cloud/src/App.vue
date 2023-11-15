<template>
  <NavbarComponent></NavbarComponent>
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
export default {
  components: {NavbarComponent}
}
</script>

<style>
.content{
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}
</style>
