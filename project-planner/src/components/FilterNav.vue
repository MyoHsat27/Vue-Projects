<template>
  <div class="container">
    <nav class="filter-nav">
      <button
          @click="updateFilter('all')"
          :class="{active : current === 'all'}"
      >View All</button>
      <button
          @click="updateFilter('completed')"
          :class="{active : current === 'completed'}"
      >Completed</button>
      <button
          @click="updateFilter('ongoing')"
          :class="{active : current === 'ongoing'}"
      >Ongoing</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "FilterNav",
  props: ["current"],
  methods: {
    updateFilter (by) {
      this.$emit("filter", by)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}

button.active {
  color: #08a16e;
}
</style>