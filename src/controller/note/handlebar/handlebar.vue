<template>
  <div id="note">
    <li class="notelstiterm" v-for="i in notelst" :class="{active: focusNoteKey == i.Key}" @click="selectNote(i)" @modefynote="modefyNote(note)">
      {{i.Title}}
      <div class="deleteitem" @click="deleteNote(i)">x</div>
    </li>
    <div class="addnote" @click="insertNote()">插入新note</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'note_handlebar',
  data() {
    return {
      notelst: ''
    }
  },
  computed: {
    ...mapGetters('note', {
      focusNote: 'FocusNote',
      focusNoteKey: 'FocusNoteKey'
    })

  },
  methods: {
    selectNote(note) {
      var self = this
      var postdata = {
        key: note.Key
      }
      this.$api.getNoteContent(postdata).then(function (resp) {
        // var key = resp
        console.log(resp)
        self.$store.dispatch('note/selectNote', note)
      })
    },
    refrushNoteLst() {
      var self = this
      var post = this.$api.getNoteLst()
      post.then((res) => {
        self.notelst = res.data
      })
    },
    insertNote() {
      this.$emit('insertNote')
    },
    deleteNote(note) {
      this.$emit('deleteNote', note)
    }
  },
  mounted() {
    this.refrushNoteLst()
  }
  // components: {
  //   Editor
  // }
}
</script>

<style lang="stylus" scoped>
.notelstiterm {
  height: 35px;
  font-size: 20px;
  line-height: 35px;
  cursor: pointer;
  padding-left: 20px;
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  /* Firefox 4 */
  -webkit-transition: all 0.5s;
  /* Safari and Chrome */
  -o-transition: all 0.5s;
  /* Opera */
  &:hover {
    background-color: #dedede;
  }
  &.active {
    background-color : #dedede;
  }
  .deleteitem{
    float: right;
    margin-right: 10px;
    border: 1px solid;
    border-radius: 15px;
    height: 20px;
    padding: 2px;
    line-height: 20px;
    width: 20px;
    text-align: center;
  }
}
.addnote{
  height: 35px;
  font-size: 20px;
  line-height: 35px;
  cursor: pointer;
  padding-left: 20px;
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  /* Firefox 4 */
  -webkit-transition: all 0.5s;
  /* Safari and Chrome */
  -o-transition: all 0.5s;
  /* Opera */
  background-color: #e8e8e8;
  &:hover {
    background-color: #dedede;
  }
}
</style>
