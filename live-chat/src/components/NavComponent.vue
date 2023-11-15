<template>
  <nav v-if="user ">
    <div>
      <p>Hey there... {{ user.displayName }}</p>
      <p class="email">Currently logged in as... {{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "@/composable/useLogout";
import getUser from "@/composable/getUser";
export default {
  name: "NavComponent",
  setup() {
    const {error, logout} = useLogout()
    const {user} = getUser()

    const handleLogout = async () => {
      await logout()
    }

    return {handleLogout, error, user}
  }
}
</script>

<style scoped>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}

</style>