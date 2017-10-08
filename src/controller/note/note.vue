<template>
  <div id="note">
    <div class="left">
      <handlebar @insertNote="InsertNote" @deleteNote="DeleteNote" ref="noteLstbar"></handlebar>
    </div>
    <div class="right">
      <div class="hasnonote" v-show="!selectNote">
        <div class="nonotetitle">NOTE</div>
      </div>
      <editor ref="editor" @modifyNote="modifyNote" v-show="selectNote"></editor>
    </div>
  
  </div>
</template>

<script>
import handlebar from './handlebar/handlebar.vue'
import editor from './editor/editor.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'note',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('note', {
      selectNote: 'FocusNote'
    })

  },
  methods: {
    InsertNote() {
      var self = this
      this.$api.createNote().then(function (res) {
        self.$refs.noteLstbar.refrushNoteLst()
      })
    },
    modifyNote(noteDetails) {
      var self = this
      var postdata = {
        ...noteDetails,
        ...{ notekey: this.selectNote.Key }
      }
      this.$api.modifyNote(postdata).then(
        self.$refs.noteLstbar.refrushNoteLst()
      )
    },
    DeleteNote(note) {
      var self = this
      var postdata = {
        key: note.Key
      }
      this.$api.deleteNote(postdata).then(function () {
        self.$refs.noteLstbar.refrushNoteLst()
      })
    }
  },
  components: {
    handlebar,
    editor
  }
}
</script>

<style lang="stylus" scoped>
@import '~card/card.styl'
$handlebarW=300px;
.left {
  width: $handlebarW
  border-right: $card_borderW solid;
  border-right-color: $card_borderC;
  box-sizing: border-box;
}

.right {
  width: "calc(100% - %s)" % $handlebarW
}

.left,
.right {
  float: left;
  height: 100%;
}
.hasnonote{
  height 100%
  width 100%
  position relative
  background-color #efefef
  .nonotetitle{
    text-align: center;
    position: absolute;
    top: 50%;
    margin-top: -30px;
    height: 60px;
    width: 100%;
    vertical-align: middle;
    font-size: xx-large;
    color: #bdbdbd;
  }
}
</style>
