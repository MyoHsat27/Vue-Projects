<template>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <h2>Are you sure?</h2>
      <p>Do you really want to delete this playlist? This process cannot be undone.</p>
      <div class="btn-container">
        <button @click="$emit('isCancel')" class="cancel-btn">Cancel</button>
        <button v-if="!isPending" @click="$emit('isDelete')" class="delete-btn">Delete</button>
        <button v-else disabled>Delete</button>
      </div>
    </div>
  </Teleport>
</template>

<script>

export default {
  name: "DeletePopup",
  props: ["isPending", 'open']
}
</script>

<style scoped>
.modal {
  background: white;
  box-shadow: 0px 0px 5px rgba(50,50,50,0.1);
  border-radius: 15px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 30%;
  left: 50%;
  min-width: 200px;
  max-width: 400px;
  margin-left: -150px;
}

.modal p {
  text-align: justify;
}

.modal h2 {
  color: #555555;
  margin: 10px 0;
}

.btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-container button {
  margin: 10px;
}

.cancel-btn {
  background: #9e9ea3;
  color: white;
}

.delete-btn {
  background: var(--primary);
  color: white;
}
</style>