// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/css/reset.css'
import './assets/js/rem'

import components from './components'
for (let i in components) {
  Vue.component(i, components[i])
}

import filters from './filters'
for (let i in filters) {
  Vue.filter(i, filters[i])
}


axios.interceptors.response.use(config => {
  if (config.data.code == -1) {
    router.replace('/login')
  }
  return config
})
Vue.prototype.$axios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const isAdmin = store.state.admin
  if (to.path == '/login') {
    next()
    return
  }
  if (to.path.includes('/manage')) {
    if (isAdmin.type == 0) {
      next()
      return
    } else {
      next('/login')
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

})
