Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
}

Array.prototype.removeId = function (int) {
  if (int > -1) {
    this.splice(int, 1);
  }
}

function deepCopy(parent, child) {
  child = child || {}
  for (var i in parent) {
    if (parent.hasOwnProperty(i)) {
      // 检测当前属性是否为对象
      if (typeof parent[i] === 'object') {
        // 如果当前属性为对象，还要检测它是否为数组
        // 这是因为数组的字面量表示和对象的字面量表示不同
        // 前者是[],而后者是{}
        child[i] = (Object.prototype.toString.call(parent[i]) === '[object Array]') ? [] : {}
        // 递归调用extend
        deepCopy(parent[i], child[i])
      } else {
        child[i] = parent[i]
      }
    }
  }
  return child
}

var x = {
  deepCopy
}
export default {
  install(Vue, options) {
    Vue.prototype.$x = x
  }
}