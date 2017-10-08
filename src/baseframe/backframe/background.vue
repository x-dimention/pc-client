<template>
  <div id="background">
    <canvas id="background_canvas"></canvas>
  </div>
</template>

<script>
import backgroundcanvas from './backgroundcanvas_3.js'
export default {
  name: 'background',
  methods: {
  },
  mounted() {
    backgroundcanvas()
  }
}

</script>

<style lang="stylus">
@import "~commonstyle";
  #background_canvas{ 
    background-color: #fff
    z-index: -9000
    display: block
    margin: 0 auto
    position: absolute
    height: 100%
    width: 100%
  } 
</style>
