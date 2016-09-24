// main.js
var Vue = require('vue')
var App = require('./App.vue')

Vue.use(require('vue-resource'));

new Vue({
  el: '#app',
  render: (h) => h(App)
})
