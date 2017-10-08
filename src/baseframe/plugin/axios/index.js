import axios from 'axios'
import Qs from 'qs'
export default {
  install(Vue, options) {
    Vue.prototype.$apiRouter = {
      routerLst: [],
      append(routers) {
        this.routerLst = [...this.routerLst, ...routers]
        routers.forEach(function (el) {
          Vue.prototype.$api[el.name] = function (data) {
            return Vue.prototype.$pull(el.path, el.type, data, el.config)
          }
        })
      },
      delete(routers) {
        var self = this
        this.routerLst = [...this.routerLst, ...routers]
        routers.forEach(function (el) {
          var id = self.routerLst.findIndex((item) => (item == el))
          self.routerLst.removeId(id)
        })
        routers.forEach(function (el) {
          delete Vue.prototype.$api[el.name]
        })
      }
    },
      Vue.prototype.$pull = function (router, type, _data, _config) {
        var data = _data || {}
        var config = _config || {}
        var myrouter = 'http://localhost:4000' + router
        var requesttype = type || 'post'
        var requestpromise = {}
        config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
        switch (requesttype) {
          case 'post':
            var mydata = Qs.stringify(data)
            requestpromise = axios[requesttype](myrouter, mydata, config)
            break
          case 'get':
            config.params = data
            requestpromise = axios[requesttype](myrouter, config)
            break
          // if use delete, http will sent a option method first,and then sent delete
          // it's asyn, well make some mistake  
          // case 'delete':
          //   config.params = data
          //   requestpromise = axios[requesttype](myrouter, config)
          //   break
          default:
            requestpromise = axios[requesttype](myrouter, mydata, config)
            break
        }
        requestpromise = requestpromise.then(function (res) {
          return res.data
        }).catch(function (err) {
          console.log(err)
        })
        return requestpromise
      },
      Vue.prototype.$api = function () {
        return {}
      }
  }
}