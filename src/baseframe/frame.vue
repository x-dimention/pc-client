<template>
  <div id="frame">
    <baseTop></baseTop>
    <baseBottom></baseBottom>
    <baseBackground></baseBackground>
  </div>
</template>

<script>
import baseTop from './backframe/top.vue'
import baseBottom from './backframe/bottom.vue'
import baseBackground from './backframe/background.vue'

export default {
  name: 'frame',
  components: {
    baseTop,
    baseBottom,
    baseBackground
  }
}
</script>

<style lang="stylus" scoped>
#base_top
  width: 100%;
  #base_topbar
    width: 500px;
    text-align: center;
    
</style>
