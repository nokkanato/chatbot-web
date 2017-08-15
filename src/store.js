import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

// initial state of the app
const state = {
  conversation: []
}

export default new Vuex.Store({
  state

})
