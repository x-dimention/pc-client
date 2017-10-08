export default {
  install(Vue, options) {
    Vue.prototype.$apiRouter = {
      routerLst: [],
      append(routers) {
        this.routerLst = [...this.routerLst, ...routers]
        routers.forEach(function (el) {
          Vue.prototype.$api[el.name] = function (data) {
            return Vue.prototype.$fetch(el.path, data)
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
      Vue.prototype.$fetch = function (router, data) {
        var mydata = new FormData();
        for (var key in data) {
          mydata.append(key, JSON.stringify(data[key]))
        }
        var myHeaders = new Headers()
        // myHeaders.append('Content-Type', 'application/json')
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
        var myInit = {
          method: 'POST',
          body: mydata,
          headers: myHeaders,
          mode: 'cors',
          cache: 'default'
        }
        var myrouter = 'http://localhost:4000' + router
        var myRequest = new Request(myrouter, myInit)

        var postfetch = fetch(myRequest).then(function (response) {
          return response.blob()
        }).then(function (myBlob) {
          var objectURL = URL.createObjectURL(myBlob)
          // myImage.src = objectURL;
          console.log(objectURL)
        })
        return postfetch
      },
      Vue.prototype.$api = function () {
        return {}
      }
  }
}