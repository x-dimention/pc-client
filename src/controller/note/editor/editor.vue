<template>
  <div id="editorpage">
    <div class="title">
      <input v-model.trim="title" />
    </div>
    <div class="label">
      <label>分类:</label>
      <div class="labellst">
        <li v-for="i in label">{{i}}</li>
      </div>
      <input v-model.trim="label" />
    </div>
    <editor class="editorcontent" ref="editor" @changeEditorData="cangeContent"></editor>
    <div class="notehandlebar">
      <button class="submitnote" @click="modifyNote()">提交</button>
    </div>
  </div>
</template>

<script>
import Editor from 'plugin/wangeditor/init.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'note_editorpage',
  data() {
    return {
      title: '',
      label: '',
      content: '',
      introduction: ''
    }
  },
  watch: {
    selectNote: function (note) {
      console.log('s')
      this.title = note.Title
      this.label = note.Label
      this.introduction = note.Introduction
      this.$refs.editor.SetNote(note.Content)
    }
  },
  computed: {
    ...mapGetters('note', {
      selectNote: 'FocusNote'
    })

  },
  methods: {
    cangeContent(content) {
      this.content = content
    },
    modifyNote() {
      var postnote = {
        title: this.title,
        label: this.label,
        content: this.content,
        introduction: this.introduction
      }
      this.$emit('modifyNote', postnote)
    }
  },
  components: {
    Editor
  }
}
</script>

<style lang="stylus" scoped>
titleH = 40px
labelH = 40px
notehandlebarH =40px
editorH = "calc(100% - %s - %s - %s)" % (titleH labelH notehandlebarH)
#editorpage{
  height :100%
}
.title, .label{
  padding: 10px;
  height:40px;
  font-size: 20px;
  box-sizing border-box
}
.title >input{
  box-sizing: border-box;
  font-size: 24px;
  width: 100%;
  border-style: hidden;
  border-bottom-style: groove;
}
.label >input{
  box-sizing: border-box;
  font-size: 20px;
  width:80%;
  border-style: hidden;
  border-bottom-style: hidden;
}
.editorcontent{
height: editorH
}

.notehandlebar{
  width:100%
  height: 40px;
  .submitnote{
    border: 1px solid #f1f1f1;
    background-color: white;
    font-size: x-large;
    height: 100%;
  }
}
</style>
