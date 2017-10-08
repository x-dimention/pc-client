<template>
  <div>
    <div id="editorElem" style="text-align:left" @click="highlight()"></div>
    <!-- <button v-on:click="getContent">查看内容</button> -->
  </div>
</template>

<script>
import '../highlight/highlight.pack'
import E from 'wangeditor'
export default {
  name: 'editor',
  data() {
    return {
      editor: null,
      editorContent: ''
    }
  },
  computed: {
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    },
    highlight: function () {
      // console.log('highlight')
      // hljs.initHighlighting();
    },
    SetNote: function (note) {
      this.editor.txt.html(note)
    }
  },
  mounted() {
    var editor = new E('#editorElem')
    this.editor = editor
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
      this.$emit('changeEditorData', this.editorContent)
    }
    editor.create()
  }
}
</script>

<style lang="stylus" >
@import '../highlight/styles/monokai-sublime.css'
#editorElem{
  height 100%
}
.w-e-text-container{
  height calc(100% - 31px) !important
}
</style>