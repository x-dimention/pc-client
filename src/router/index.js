import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/note', name: 'note', component: resolve => require(['../controller/note/init.vue'], resolve) },
    { path: '/wiki', name: 'wiki', component: resolve => require(['../controller/wiki/init.vue'], resolve) }
  ]
})
