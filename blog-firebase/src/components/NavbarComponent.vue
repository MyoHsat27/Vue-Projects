<template>

  <header>
    <router-link :to="{ name: 'Home' }" class="icon">The Dojo Blog</router-link>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create Post</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
header .icon {
  color: #8a8a8a;
  margin-left: 0;
  font-size: 28px;
}

header .icon.router-link-active {
  color: #8a8a8a;
  font-weight:200;
}

header a {
  color: #bbb;
  text-decoration: none;
  margin-left: 20px;
}
header a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>