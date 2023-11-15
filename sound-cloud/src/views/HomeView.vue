<template>
  <div class="home">
    <div v-if="error" class="error">Could not fetch data</div>
    <div v-if="documents">
      <ListviewComponent :playlists="documents"></ListviewComponent>
    </div>
  </div>
</template>

<script>
import getCollection from "@/mixins/getCollection";
import ListviewComponent from "@/components/ListviewComponent";

export default {
  name: 'HomeView',
  components: {ListviewComponent},

  setup() {
    const {error, documents} = getCollection('playlists')
    return {error, documents}
  }

}
</script>
