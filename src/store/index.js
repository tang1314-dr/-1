import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'

var store=new vuex.Store({
    state,
    actions,
    mutations
})

export default store