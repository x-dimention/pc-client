// import store from 'vuex'
export default {
  install(Vue, options) {
    Vue.prototype.$registeComp = function (options) {
      var name = options.moduleName
      if (options.apiRouter) {
        this.$apiRouter.append(options.apiRouter)
      }
      if (options.store) {
        // config need deep copy because vue unregisterModule but had use config object, 
        // it make the config states not default
        var _store = this.$x.deepCopy(options.store)
        this.$store.registerModule(name, _store)
      }
      return options
    },
      Vue.prototype.$destroyComp = function (options) {
        var name = options.moduleName
        this.$apiRouter.delete(options.apiRouter)
        this.$store.unregisterModule(name)
        return options
      }
  }
}