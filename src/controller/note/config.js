var apiRouter = [
  { name: 'getNoteLst', path: '/api/note/getNoteLst', type: 'get', config: {} },
  { name: 'getNoteContent', path: '/api/note/content', type: 'get' },
  { name: 'modifyNote', path: '/api/note/modifyNote', type: 'post' },
  { name: 'createNote', path: '/api/note/createNote', type: 'get' },
  { name: 'deleteNote', path: '/api/note/deleteNote', type: 'post' }
]
var store = {
  namespaced: true,
  state: {
    noteLst: [],
    focusNote: undefined,
    focusNoteKey: ''
  },
  getters: {
    NoteLst: function (state) {
      return state.noteLst
    },
    FocusNoteKey: function (state) {
      var key = !state.focusNote ? '' : state.focusNote.Key
      return key
    },
    FocusNote: function (state) {
      return state.focusNote
    }
  },
  mutations: {
    selectNote(state, note) {
      state.focusNote = note
    },
    setNoteContent(state, noteContent) {

    }
  },
  actions: {
    selectNote(context, note) {
      context.commit('selectNote', note)
    }
  }
}
var modelname = 'note'
export default {
  apiRouter: apiRouter,
  store: store,
  moduleName: modelname
}
