import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    web: state.web,
    java: state.java,
    db: state.db,
    techs: [...state.web, ...state.java, ...state.db]
  },
  actions,
  mutations,
  getters
  // ,
  // actions: {
  // },
  // mutations: {
  // },
  // modules: {
  // }
})
