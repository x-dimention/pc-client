<template>
  <div>
    <card :comp="wiki">
    </card>
  
  </div>
</template>

<script>
import card from 'card/card.vue'
import wiki from './wiki.vue'
export default {
  name: 'wiki-init',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      wiki: wiki
    }
  },
  components: {
    card
    // wiki
  }
}
</script>

<style scoped>

</style>
