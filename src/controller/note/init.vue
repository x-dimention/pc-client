<template>
  <div>
    <card :comp="note">
    </card>
  </div>
</template>

<script>
import card from 'card/card.vue'
import note from './note.vue'
import config from './config.js'
export default {
  name: 'note-init',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      note: note
    }
  },
  beforeCreate() {
    this.$registeComp(config)
  },
  destroyed() {
    this.$destroyComp(config)
  },
  components: {
    card
    // note
  }
}
</script>

<style scoped>

</style>
