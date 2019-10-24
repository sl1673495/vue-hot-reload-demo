import api from 'vue-hot-reload-api'
import Vue from 'vue'

// 初始化
api.install(Vue, true)

const appOptions = {
  render: h => h('div', 'foo')
}

api.createRecord('my-app', appOptions)

window.app = new Vue(appOptions).$mount('#app')

setTimeout(() => {
  api.rerender('my-app', {
    render: h => h('div', 'bar')
  })
}, 2000);

console.log(api.map)