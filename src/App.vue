<template>
  <div id="app">
    <baseframe></baseframe>
    <router-view></router-view>
  </div>
</template>

<script>
import baseframe from 'base/frame.vue'
import 'plugin/plugin.js'
export default {
  name: 'app',
  components: {
    baseframe
  }
}
</script>

<style lang="stylus">
@import "~commonstyle";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
