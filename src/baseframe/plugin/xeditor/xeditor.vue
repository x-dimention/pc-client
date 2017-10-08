<template>
  <div>
    <div class="editor">
      <div class="toolbar">
        <button v-for="(tool, key) in tools" class="tool" @click="triggerTool(tool)" :key="key" type="button">
          {{tool.lab}}
        </button>
      </div>
      <div class="editorview" contentEditable="true" @blur="blurHandle($event)">
  
      </div>
    </div>
  </div>
</template>

<script>
import '../highlight/highlight.pack'
export default {
  name: 'x_editor',
  data() {
    return {
      tools: []
    }
  },
  methods: {
    triggerTool: function (tool, event) {
      tool.handle()
    },
    exec: function (command, value = null) {
      document.execCommand(command, false, value)
    },
    blurHandle: function (e) {
      console.log('ok')
      hljs.initHighlightingOnLoad(e.data)
    }
  },
  mounted() {
    let renderTools = [
      {
        name: 'u',
        lab: 'U',
        handle: function () {
          document.execCommand('underline')
        }
      },
      {
        name: 'i',
        lab: 'I',
        handle: function () {
          document.execCommand('italic')
        }
      },
      {
        name: 'b',
        lab: 'B',
        handle: function () {
          document.execCommand('bold')
        }
      },
      {
        name: 'h6',
        lab: 'L1',
        handle: function () {
          document.execCommand('formatBlock', null, '<h6>')
        }
      },
      {
        name: 'h2',
        lab: 'L2',
        handle: function () {
          document.execCommand('formatBlock', null, '<h5>')
        }
      },
      {
        name: 'h',
        lab: 'M',
        handle: function () {
          document.execCommand('formatBlock', null, '<h3>')
        }
      },
      {
        name: 'code',
        lab: '>_',
        handle: function () {
          document.execCommand('formatBlock', null, '<pre>')
        }
      }
    ]
    this.tools = renderTools
  }
}
</script>

<style scoped>
.editor {
  width: 500px;
  height: 300px;
  border: 1px solid;
  position: relative;
}

.toolbar {
  height: 50px;
  top: 0px;
  right: 0px;
  position: absolute;
}

.tool {
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid;
  text-align: center;
}

.editorview {
  height: 100%;
  -webkit-user-modify: read-write;
  box-sizing: border-box;
  padding: 5px;
  outline: none;
}
</style>
