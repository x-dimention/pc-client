<template>
  <div id="q">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'note',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App q'
    }
  },
  beforeCreate() {
    // this.$fetch('sssss')
  }
}
</script>

<style scoped>

</style>
