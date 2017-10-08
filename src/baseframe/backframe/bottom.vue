<template>
  <div id="base_bottom">
    <div id="base_bottombar">
    </div>
    <div id="base_group">
      <img class="base_group_img" src="../../assets/group.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'base_bottombar'
}
</script>

<style lang="stylus">
@import "~commonstyle";
#base_group{
  position: absolute
  height: 50px
  bottom: $baseframe_marginedge
  right: $baseframe_marginedge
  .base_group_img{
    height 50px
  }
}

</style>
