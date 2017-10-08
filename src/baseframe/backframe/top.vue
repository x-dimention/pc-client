<template>
  <div id="base_top">
    <div id="logo">
      <img src="../../assets/logo.png" />
    </div>
    <div id="base_topbar">
      <button type="button" class="base_topbar_button" v-on:click="link(i.name)" v-bind:class="{active: activePage == i.name}" v-for="i in topbarbutton">
        {{i.val}}
      </button>
    </div>
    <div id="base_topright_handle">
      <button type="button" class="base_topbar_button">NOTE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base_topbar',
  data() {
    return {
      topbarbutton: [
        { name: 'home', val: 'HOME' },
        { name: 'wiki', val: 'WIKI' },
        { name: 'q', val: 'Q' },
        { name: 'note', val: 'NOTE' }
      ],
      activePage: 'HOME'
    }
  },
  methods: {
    link(routerName) {
      this.$router.push({ path: routerName })
      this.activePage = routerName
    }
  }
}
</script>

<style lang="stylus">
@import "~commonstyle";
#base_top
  z-index 5000
  position: absolute
  #logo
    height: inherit
    overflow: auto
    position: absolute
    left: $baseframe_marginedge
    top $baseframe_marginedge
    clear: both;
    img
      float: left;
      width: 200px;
  #base_topbar
    top: $baseframe_marginedge;
    position absolute
    width: 100%;
    text-align: center;
    overflow: auto;
  #base_topright_handle {
    position: absolute;
    top: $baseframe_marginedge;
    right: $baseframe_marginedge;
    float: right;
    display: block;
  }
  .base_topbar_button{
    margin: 0px 10px 20px 10px
    outline: none;
    height: 40px;
    width: 130px;
    border-radius:40px;
    background: rgba(255, 255, 255, 0)
    border: 2px solid $grey4;
    color:$grey4;
    letter-spacing:1px;
    text-shadow:0;
    font:{
      size:12px;
      weight:bold;
    }
    transition: all 0.25s ease;
    &:hover {
      color:white;
      background: $grey4;
    }
    &.active {
      color:white;
      background: $grey4;
    }
    &:active {
      letter-spacing: 2px ;
    }
  }
   
</style>
