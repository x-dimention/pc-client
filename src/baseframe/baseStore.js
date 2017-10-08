import Vue from 'vue'
import Vuex from 'vuex'
// import base from './card/cardStore.js'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    // base
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
