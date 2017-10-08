<template>
  <transition name="fade" appear v-on:leave="leave">
    <div class="basecard">
      <component class="compclass" v-bind:is="comp">
      </component>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'card',
  props: [
    'comp'
  ],
  methods: {
    leave: function () {
      console.log('ss')
    }
  },
  mounted() {
  }
}

</script>

<style lang="stylus">
  @import "./card.styl"

  .basecard{ 
    border: $card_borderW solid;
    border-color: $card_borderC;
    background-color #fff
    z-index 1
    display block
    margin 0 auto
    position absolute
    height 80%
    width 80%
    left 10%
    top 10%
  } 
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s 
    transition: 'scale(2,2.5)'
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }
  .compclass{
    width : 100%
    height : 100%
  }
</style>
