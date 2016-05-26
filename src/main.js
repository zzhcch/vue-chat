import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

import App from './app'
import store from './vuex/chat/store'
import router from './router/index'
import WildVue from 'wildvue'
//import Wilddog from 'wilddog'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(WildVue)

Vue.config.debug = true

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

sync(store, router)

router.start(App, 'app')
